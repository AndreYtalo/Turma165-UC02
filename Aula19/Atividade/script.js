
// questão01
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
// questão02
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
  // questão03
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
  // questão04
  function mudarCor() {
    const corSelecionada = document.getElementById("cor").value;
    document.body.style.backgroundColor = corSelecionada;
  } 
// questão05
  function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (!peso || !altura) {
      document.getElementById("resultado").innerText = "Preencha os dois campos corretamente.";
      return;
    }

    let imc = peso / (altura * altura);
    let msg = "IMC: " + imc.toFixed(2) + " - ";

    if (imc < 18.5) {
      msg += "Abaixo do peso";
    } else if (imc < 25) {
      msg += "Peso normal";
    } else if (imc < 30) {
      msg += "Sobrepeso";
    } else {
      msg += "Obesidade";
    }

    document.getElementById("resultadoImc").innerText = msg;
  }