//via id
let titulo = document.getElementById("titulo");
console.log(typeof titulo);
console.log(titulo.innerText);


//via class
//unico elemento
let itens = document.getElementsByClassName("teste");
console.log(itens[1].innerText);
console.log(itens[0].innerText);

let cabecalhos = document.getElementsByTagName("h1");
console.log(cabecalhos[0].innerText);
console.log(cabecalhos[0].innerText);


//via seletor
let paragrafo = document.querySelector("p");
console.log(paragrafo.innerText);

let paragrafos = document.querySelectorAll("p");
console.log(paragrafos[0].innerText);

cabecalhos[0].textContent = "Estou manipulando o dom";
cabecalhos[0].innerHTML = "<u>Estou manipulando o dom!</u>";

cabecalhos[0].style.color = "blue";
cabecalhos[1].style.fontSize = "1.5rem";

cabecalhos[1].classList.add("texto01")

paragrafos[1].classList.add("texto02")
