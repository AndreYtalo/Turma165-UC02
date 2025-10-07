let = texto = document.querySelector("h1");
texto.textContent = "Aula manipulação do Dom";
texto.innerHTML += "<u> teste </u>"

document.body.innerHTML += "<main> <h3> criando elementos inline </h3> </main>"

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Texto Criado dinamicamente!";
novoParagrafo.classList.add("texto");
document.body.appendChild(novoParagrafo);

function adicionarItem(){
    let item = document.getElementById("item").value;
    let novoItem = document.createElement("li");
    novoItem.textContent = item;
    document.getElementById("list").appendChild(novoItem);
    document.getElementById("item").value = "";
}

let idade = parseIntprompt("Digite sua idade:");

if(idade < 18 ){
    alert("menor de");
    
}
else if(idade < 60 ){
    alert("você é adulto!");
}

else{
    alert("você é idoso!");
}


