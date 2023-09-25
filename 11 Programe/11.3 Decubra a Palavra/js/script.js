const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const palavra = form.inPalavra.value.trim();
  const dica = form.inDica.value;

  if (palavra.includes(" ")) {
    alert("Informe uma palavra válida (Sem espaços).");
    form.reset();
    form.inPalavra.focus();
    return;
  }

  if (localStorage.getItem("jogoPalavra")) {
    localStorage.setItem(
      "jogoPalavra",
      localStorage.getItem("jogoPalavra") + ";" + palavra
    );

    localStorage.setItem(
      "jogoDica",
      localStorage.getItem("jogoDica") + ";" + dica
    );
  } else {
    localStorage.setItem("jogoPalavra", palavra);
    localStorage.setItem("jogoDica", dica);
  }
  if (localStorage.getItem("jogoPalavra")) {
    alert(`Ok! Palavra ${palavra} salva com sucesso!`);
  }

  form.reset();
  form.inPalavra.focus();
});
