function questão01() {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    for (let i = 0; i <= 500; i++) {
        resultado.innerHTML += i + "<br>";
    }

}


function questão02() {
    const resultado02 = document.getElementById("resultado02");
    resultado02.innerHTML = "";

    for (let i = 0; i <= 100; i += 2) {
        resultado02.innerHTML += i + "<br>";
    }
}
