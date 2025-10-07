    function verificar() {
      const ano = document.getElementById("ano").value;
      const atual = new Date().getFullYear();
      const idade = atual - ano;
      let msg = "";

      if (ano === "" || idade < 0) {
        msg = "Digite um ano válido.";
      } else if (idade < 18) {
        msg = "Você é menor de idade.";
      } else if (idade < 60) {
        msg = "Você é adulto.";
      } else {
        msg = "Você é idoso.";
      }

      document.getElementById("mensagem").textContent = msg;
    }