function mostrarSaudacao() {
    const hora = parseInt(document.getElementById("hora").value);
    const mensagem = document.getElementById("mensagem");

    if (isNaN(hora) || hora < 0 || hora > 23) {
      mensagem.textContent = "Digite uma hora válida entre 0 e 23.";
      return;
    }

    if (hora >= 0 && hora <= 11) {
      mensagem.textContent = "Bom dia!";
    } else if (hora >= 12 && hora <= 17) {
      mensagem.textContent = "Boa tarde!";
    } else {
      mensagem.textContent = "Boa noite!";
    }
  }

function verificarParOuImpar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
      resultado.textContent = "Por favor, digite um número válido.";
    } else if (numero % 2 === 0) {
      resultado.textContent = "O número é PAR.";
    } else {
      resultado.textContent = "O número é ÍMPAR.";
    }
  }
  function verificarNota() {
    const nota = parseFloat(document.getElementById("nota").value);
    const mensagem = document.getElementById("mensagem02");

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