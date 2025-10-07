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