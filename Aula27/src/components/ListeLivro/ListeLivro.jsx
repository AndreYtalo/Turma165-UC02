import Livros from "../Livros/Livros";
import style from "./ListeLivro.module.css";

export default function ListeLivro({ livros = [] }) {
  return (
    <div className={style.container}>
      {livros.length > 0 ? (
        livros.map((liv, index) => (
          <Livros
            key={index}
            titulo={liv.titulo}
            autor={liv.autor}
            ano={liv.ano}
            genero={liv.genero}
            capa={liv.capa}
            disponivel={liv.disponivel}
            badge={liv.badge}
          >
            {liv.children}
          </Livros>
        ))
      ) : (
        <p>Nenhum livro cadastrado</p>
      )}
    </div>
  );
}
