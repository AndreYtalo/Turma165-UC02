let tarefas = [];
let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");
let indiceEdicao = null;


btnAdd.addEventListener("click", () => {
    if (input.value === "") {
        alert("Digite uma tarefa");
    } else if (indiceEdicao === null) {
        
        tarefas.push(input.value);
    } else {
        
        tarefas[indiceEdicao] = input.value;
        indiceEdicao = null;
        btnAdd.textContent = "Adicionar"; 
    }

    input.value = "";
    mostrarTarefas();
});

function mostrarTarefas() {
    lista.textContent = ""; 

    tarefas.forEach((t, i) => {
        let li = document.createElement("li");
        li.textContent = t;

        
        let editar = document.createElement("button");
        editar.textContent = "Editar"; 
        editar.addEventListener("click", () => atualizar(i)); 

        
        let excluirBtn = document.createElement("button");
        excluirBtn.textContent = "Excluir";
        excluirBtn.addEventListener("click", () => excluir(i)); 

        li.appendChild(editar);
        li.appendChild(excluirBtn);
        lista.appendChild(li);
    });
}


function excluir(i) {
    let confirmacao = window.confirm(`Você realmente deseja excluir a tarefa "${tarefas[i]}"?`);
    if (confirmacao) {
        tarefas.splice(i, 1); 
        mostrarTarefas();     
    }
}


function atualizar(i) {
    input.value = tarefas[i];        
    indiceEdicao = i;                 
    btnAdd.textContent = "Atualizar"; 
}
