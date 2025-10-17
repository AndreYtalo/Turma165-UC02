function questão01() {
    const cores = ["Azul", "Verde", "Vermelho", "Amarelo"];
    const container = document.getElementById('listaDeCores');

    for (let i = 0; i < cores.length; i++) {
        let p = document.createElement("p");
        p.textContent = cores[i];
        p.classList.add(cores[i]);
        container.appendChild(p);

    }
}
 function alunos() {
    let alunos = [];
    let section = documento.querySelectorAll("section")
    console.log(section.length);
    let quantidade = parent(prompt("Informe a quantidade de alunos"));
    
    if (quantidade >0 && typeof quantidade === "number") {
        for (let i=0; i<quantidade; i++){
            let nome = prompt(`Informe o numero do aluno ${i++}:`);
            alunos.push(nome);
        }
        alunos.forEach(a =>{
            let item = document.createComment("li")
            item.textContent = alunos;
            section.appendChild(item)
        })
        
        
    }
 }

