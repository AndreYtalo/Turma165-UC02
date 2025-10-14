const numero = parseInt(prompt("Digite um número de 0 a 4:"));

switch (numero) {
  case 0:
    console.log("Ala de JS Hoje");
   break; 
  case 1:
    console.log("Ala de JS Amanhã");
    break;
  case 2:
    console.log("Ala de JS Sempre");
    break;
    default:
    console.log("Opção invalida");    
    
}

function semanas(){
const dia = parseInt(document.getElementById("dia").value);
const resultado = document.getElementById("resultado");

switch (dia) {
  case 1:
    resultado.textContent = "Domingo";
    break;
  case 2:
     resultado.textContent ="Segunda-feira";
    break;
  case 3:
     resultado.textContent ="Terça-feira";
    break;
  case 4:
     resultado.textContent ="Quarta-feira";
    break;
  case 5:
     resultado.textContent ="Quinta-feira";
    break;
  case 6:
     resultado.textContent ="Sexta-feira";
    break;
  case 7:
     resultado.textContent ="Sábado";
    break;
  case 0:
  case 8:
     resultado.textContent ="Número inválido. Digite de 1 a 7.";
    break;
  default:
     resultado.textContent ="Valor fora do esperado.";
}

}