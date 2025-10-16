function questão01() {
    let resultado = document.getElementById("resultado")

    for (let i = 0; i <= 500; i++) {
        resultado.innerHTML += i + ",";
    }

}


function questão02() {
    const resultado02 = document.getElementById("resultado02");

    for (let i = 0; i <= 100; i += 2) {
        resultado02.innerHTML += i + ",";
    }
}



function questao03() {
    let value = Number(document.querySelector("#number").value);
    let resultado03 = document.querySelector("#resultado03");
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${value} x ${i} = ${value * i + "     "}`;
    }

    resultado03.textContent = resultado;
}