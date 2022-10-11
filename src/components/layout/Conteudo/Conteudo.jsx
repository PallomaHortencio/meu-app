import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <>
      <main>
        {/* Aqui é comentario de jsx */}
        <section>
          <h2 className={estilos.subtitulo}>Conteúdo do site....</h2>
          <p>
            <span className={`${estilos.destaque} ${estilos.sombraTexto}`}>
              Lorem ipsum dolor
            </span>
            sit amet consectetur adipisicing elit. Doloribus, cumque excepturi?
            Consequuntur molestiae sit, blanditiis quod harum quis illo
            obcaecati, quibusdam aspernatur ipsam, corporis voluptate ipsa
            officiis repellat vitae sed.
          </p>

          <Artigo />
          <Artigo />
          <Artigo />
        </section>
      </main>
    </>
  );
};

export default Conteudo;
