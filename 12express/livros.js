const exrpess = require('express');
const router = exrpess.Router();

const dbknex = require('./data/seeds/db_config');

router.get('/', async (req, res) => {
  try{
    const livros = await dbknex('livros').orderBy('id', 'desc');
    res.status(200).json(livros);

  } catch (error) {
    res.status(400).json({ mesg: error.messege});
  }
});

module.exports = router;