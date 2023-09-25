const exrpess = require("express");
const router = exrpess.Router();
const cors = require('cors');
router.use(cors());


const dbknex = require("./data/db_config");

router.get("/", async (req, res) => {
  try {
    const livros = await dbknex("livros").orderBy("id", "desc");
    res.status(200).json(livros);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  const { titulo, autor, ano, preco, foto } = req.body;

  if (!titulo || !autor || !ano || !preco || !foto) {
    res
      .status(400)
      .json({ msg: "Enviar titulo, autor, ano, preço e foto do livro." });
    return;
  }
  try {
    const novo = await dbknex("livros").insert({
      titulo,
      autor,
      ano,
      preco,
      foto,
    });
    res.status(201).json({ id: novo[0] });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { preco } = req.body;

  try {
    await dbknex("livors").update({ preco }).where("id", id);
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await dbknex("livros").del().where({});
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/filtro/:palavra", async (req, res) => {
  const palavra = req.params.palavra;

  try {
    const livros = await dbknex("livros")
      .where("titulo", "like", `%${palavra}%`)
      .orWhere("autor", "like", `%${palavra}%`);
    res.status(200).json(livros);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/dados/resumo", async (req, res) => {
  try {
    const consulta = await dbknex("livors")
      .count({ num: "*" })
      .sum({ soma: "preco" })
      .max({ maior: "preco" })
      .avg({ media: "preco" });
    const { num, soma, maior, media } = consulta[0];
    res.status(200).json({ num, soma, maior, media: Number(media.toFixed(2)) });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/dados/grafico", async (req, res) => {
  try {
    const totalPorAno = await dbknex("livros")
      .select("ano")
      .sum({ total: "preco" })
      .groupBy("ano");
    res.status(200).json(totalPorAno);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
