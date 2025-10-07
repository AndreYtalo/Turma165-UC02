function verificarNota() {
    const nota = parseFloat(document.getElementById("nota").value);
    const mensagem = document.getElementById("mensagem");

    if (isNaN(nota) || nota < 0 || nota > 10) {
      mensagem.textContent = "Por favor, digite uma nota válida entre 0 e 10.";
    } else if (nota < 6) {
      mensagem.textContent = "Reprovado";
    } else if (nota < 8) {
      mensagem.textContent = "Recuperação";
    } else {
      mensagem.textContent = "Aprovado";
    }
  }