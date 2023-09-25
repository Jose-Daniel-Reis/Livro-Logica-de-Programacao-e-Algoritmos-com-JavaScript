const table = document.querySelector("table");
const mostrar = document.querySelector("input[type='checkbox']");

const montarTabela = () => {
  if (localStorage.getItem("jogoPalavra")) {
    const palavras = localStorage.getItem("jogoPalavra").split(";");
    const dicas = localStorage.getItem("jogoDica").split(";");

    for (let i = 0; i < palavras.length; i++) {
      const linha = table.insertRow(-1);

      const col1 = linha.insertCell(0);
      const col2 = linha.insertCell(1);
      const col3 = linha.insertCell(2);

      col1.innerText = palavras[i];
      col2.innerText = dicas[i];
      col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
    }
  }
};

mostrar.addEventListener("change", () => {
  mostrar.checked ? montarTabela() : window.location.reload();
});

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("exclui")) {
    const palavra = e.target.parentElement.children[0].innerText;

    if (confirm(`Confirma exclusão da palavra: "${palavra}"?`)) {
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("jogoPalavra");
      localStorage.removeItem("jogoDica");

      const palavras = [];
      const dicas = [];

      for (let i = 1; i < table.rows.length; i++) {
        palavras.push(table.rows[i].cells[0].innerText);
        dicas.push(table.rows[i].cells[1].innerText);
      }

      localStorage.setItem("jogoPalavra", palavras.join(";"));
      localStorage.setItem("jogoDica", dicas.join(";"));
    }
  }
});
