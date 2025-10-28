import style from './Livros.module.css';

export default function Livros({ titulo, autor, ano, capa, genero }) {
    return (
      <div className={style.card}>
        <div className={style.capa}>
          <img src={capa} alt={`Capa do livro ${titulo}`} />
        </div>
        <div className={style.info}>
          <h1>{titulo}</h1>
          <p><strong>Gênero:</strong> {genero}</p>
          <p><strong>Autor:</strong> {autor}</p>
          <p><strong>Ano:</strong> {ano}</p>
        </div>
      </div>
    );
  }
  