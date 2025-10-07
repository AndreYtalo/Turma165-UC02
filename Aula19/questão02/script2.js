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