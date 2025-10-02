function questão01(){
    let nome = prompt("Informe o seu nome");
let idade = prompt("Informe sua iadede");
let cidade = prompt("Informe sua cidade");
alert(`olá, meu nome é ${nome}, tenho ${idade}, sou de ${cidade}`);
}

function questão02(){
    let preco = prompt("Digite o preço do produto:");
    let precoComDesconto = preco * 0.8;
    
    alert(`preço original: R$ ${preco} preço Original ${precoComDesconto} preço com desconto`)
}

function questão03(){
    let celsius = prompt("indique o valor para celsius")
    let Fahrenheit = (celsius *9/5 + 32)

    alert(`em celsius o seu valor é ${celsius} e em Fahrenheit ${Fahrenheit}`)
}

questão03()

