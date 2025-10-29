import ListeLivro from "../components/ListeLivro/ListeLivro";
import { bancoLivros } from "../data/banco";
import style from "./Catalago.module.css";

export default function Catalago() {
  return (
    <div className={style.catalogo}>
      <h1 className={style.titulo}>📚 Catálogo de Livros</h1>
      <ListeLivro livros={bancoLivros} />
      <footer className={style.footer}>
        <p>c:</p>
      </footer>
    </div>
  );
}
