import Artigo from "../Artigo";
import "./Conteudo.css";

const Conteudo = () => {
  return (
    <>
      <main>
        {/* Aqui é comentario de jsx */}
        <section>
          <h2 className="subtitulo">Conteúdo do site....</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            cumque excepturi? Consequuntur molestiae sit, blanditiis quod harum
            quis illo obcaecati, quibusdam aspernatur ipsam, corporis voluptate
            ipsa officiis repellat vitae sed.
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
