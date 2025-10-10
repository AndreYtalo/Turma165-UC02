function adicionar(valor) {
   document.querySelector('#display').value += valor;
}

function limpar() {
    document.querySelector('#display').value = '';
}

function voltar() {
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    const display = document.querySelector('#display');
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = 'deixa de ser burro';

    }
}


