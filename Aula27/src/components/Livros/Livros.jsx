import style from "./Livros.module.css";

export default function Livros({titulo, autor,ano,capa,genero, disponivel, badge, children = "Nenhuma informação adicional disponível"
}) {
  return (
    <div className={style.card}>
      <div className={style.capa}>
        <img src={capa} alt={titulo} />
      </div>

      <div className={style.info}>
        <h1>{titulo}</h1>
        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Gênero:</strong> {genero}</p>
        <p><strong>Ano:</strong> {ano}</p>
        <span className={style.badge}>{badge}</span>
        <p className={disponivel ? style.disponivel : style.indisponivel}>
          {disponivel ? "Disponível" : "Indisponível"}
        </p>
        <p>{children}</p>
      </div>
    </div>
  );
}
