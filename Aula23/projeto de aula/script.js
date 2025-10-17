let tarefas = [];
let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", () =>{
    if (input.value === ""){
        alert("Digite uma tarefa");
    }else{
        tarefas.push(input.value);
    }
    input.value = "";
    mostrarTarefas();
});


function mostrarTarefas(){
    lista.textContent = "";
    tarefas.forEach((t,i)=>{
        let li = document.createElement("li");
        li.textContent = t;
        let editar = document.createElement("button");
        editar.textContent = "Edidar";
        
        
        let excluir = document.createElement("excluir");
        excluir.textContent = "Excluir";
        excluir.addEventListener("click",()=> excluir());

        li.appendChild(editar);
        li.appendChild(excluir);
        lista.appendChild(li);
    })
    
}

function excluir(i){


    
}