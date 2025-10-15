function calcular() {
    const tipo = document.getElementById('tipo').value;
    const x = +document.getElementById('x').value;
    const y = +document.getElementById('y').value;
    const z = +document.getElementById('z').value;
    const resultado = document.getElementById('resultado');




    if (x >= 0 && y >= 0 && z >= 0) {
        switch (tipo) {
            case 'aritmetica':
                media = (x + y + z) / 3;
                resultado.textContent = `Média Aritmética: ${media.toFixed(2)}`;
                break;
            case 'ponderada':
                media = (x * 2 + y * 3 + z * 5) / 10;
                resultado.textContent = `Média Ponderada: ${media.toFixed(2)}`;
                break;
            case 'geometrica':
                media = Math.cbrt(x * y * z);
                resultado.textContent = `Média Geométrica: ${media.toFixed(2)}`;
                break;
            default:
                resultado.textContent = "Opção inválida.";
        }

    } else {
        resultado.textContent = "não é possível calcular com números negativos "
    }
}

function questão02() {
    let num01 = Number(document.getElementById("num01").value);
    let num02 = Number(document.getElementById("num02").value);
    let op = document.getElementById("op").value;
    let resultado = document.getElementById("resultado02");


    switch (op) {
        case "+":
            resultado.textContent = num01 + num02;

            break;
        case "-":
            resultado.textContent = num01 - num02;
            break;
        case "*":
            resultado.textContent = num01 * num02;
            break;
        case "/":
            if (num02 == 0) {
                resultado.textContent = "não é possível realizar divisão por 0."

            } else {
                resultado.textContent = num01 / num02;
            }
            break;
        default:
            resultado.textContent = "Opção inválida.";

    }
}


