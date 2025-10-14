function calcular() {
    const tipo = document.getElementById('tipo').value;
    const x = +document.getElementById('x').value;
    const y = +document.getElementById('y').value;
    const z = +document.getElementById('z').value;
    const resultado = document.getElementById('resultado');

   
    

    
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
}

