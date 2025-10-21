let alunos = [];
let indiceEdicao = null;

let nomeInput = document.querySelector("#nomeAluno");
let matriculaInput = document.querySelector("#matriculaAluno");
let btnAdd = document.querySelector("#btnAdd");
let lista = document.querySelector("#lista"); 

btnAdd.addEventListener("click", () => {
    let nome = nomeInput.value.trim();
    let matricula = matriculaInput.value.trim();

    if (nome === "" || matricula === "") {
        alert("Preencha o nome e a matrícula do aluno.");
        return;
    }

    if (indiceEdicao === null) { 
        alunos.push({ nome, matricula });
    } else {
        alunos[indiceEdicao] = { nome, matricula };
        indiceEdicao = null;
        btnAdd.textContent = "Adicionar";
    }

    nomeInput.value = "";
    matriculaInput.value = "";

    salvarLocalStorage();
    mostrarAlunos();
});

function mostrarAlunos() {
    lista.textContent = ""; 

    alunos.forEach((aluno, i) => {
        const li = document.createElement("li");
        li.textContent = `Nome: ${aluno.nome} | Matrícula: ${aluno.matricula}`;

        const editarBtn = document.createElement("button");
        editarBtn.textContent = "Editar";
        editarBtn.addEventListener("click", () => editarAluno(i));

        const excluirBtn = document.createElement("button");
        excluirBtn.textContent = "Excluir";
        excluirBtn.addEventListener("click", () => excluirAluno(i));

        li.appendChild(editarBtn);
        li.appendChild(excluirBtn);
        lista.appendChild(li);
    });
}

function editarAluno(i) {
    const aluno = alunos[i];
    nomeInput.value = aluno.nome;
    matriculaInput.value = aluno.matricula;
    indiceEdicao = i;
    btnAdd.textContent = "Atualizar";
}

function excluirAluno(i) {
    const confirmacao = window.confirm(`Deseja realmente excluir o aluno "${alunos[i].nome}"?`);
    if (confirmacao) {
        alunos.splice(i, 1);
        salvarLocalStorage();
        mostrarAlunos();
    }
}

function salvarLocalStorage() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

function carregarLocalStorage() {
    const dadosSalvos = localStorage.getItem("alunos");
    if (dadosSalvos) {
        alunos = JSON.parse(dadosSalvos);
        mostrarAlunos();
    }
}


window.addEventListener("DOMContentLoaded", carregarLocalStorage);
