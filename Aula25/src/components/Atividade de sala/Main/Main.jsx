import Card from "../Card/Card"
export default function Main() {
  return (
    <>

      <Card Pergunta={"1.  Explque com suas palavras o que é um componente no React Dê exemplo prático de como ele pode ser usado em uma aplicação"}
            Resposta={"Um componente no React é uma parte reutilizável da interface (como um botão, card ou formulário) que combina HTML, CSS e lógica JavaScript."}></Card>

      <Card Pergunta={"2.  Qual é a função de arquivo App.jsx em um projeto React? Por que ele é considerado o componente principal?"}
            Resposta={"O App.jsx é o componente principal de um projeto React. Ele é o ponto de partida da aplicação, onde outros componentes são importados e exibidos. O React renderiza o App primeiro, e a interface é montada a partir dele."}></Card>

      <Card Pergunta={"3.  Descreva o papel do arquivo main,jsx em um projeto React? (ou index.js). O que ele faz em relação ao HTML da aplicação?"}
            Resposta={"O main.jsx (ou index.js) inicializa o React e renderiza o componente App dentro da <div id=root> do arquivo HTML."}></Card>
            
      <Card Pergunta={"4.  O ciclo de vida de um componete React pode ser dividdos em três fases. Quais são elas? Explique cada uma com um exemplo simples"}
            Resposta={"1 Montagem: o componente é criado e mostrado. 2 Atualização: o componente muda quando o estado ou props mudam. 3 Desmontagem: o componente é removido da tela."}></Card>
    </>
  )
}