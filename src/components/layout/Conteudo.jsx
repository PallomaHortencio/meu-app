import Artigo from "../Artigo";

const Conteudo = () => {
  /* (1) Crie um array com o nome de 3 cursos */
  /* (2) Dentro das chamadas do artigos, passe como uma nova prop chamada curso, o nome de cada curso */

  var cursos = ["HTML", "CSS", "JavaScript"];

  return (
    <>
      <main>
        {/* Aqui é comentario de jsx */}
        <section>
          <h2>Conteúdo do site....</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            cumque excepturi? Consequuntur molestiae sit, blanditiis quod harum
            quis illo obcaecati, quibusdam aspernatur ipsam, corporis voluptate
            ipsa officiis repellat vitae sed.
          </p>

          <Artigo
            titulo="Artigo 1"
            subtitulo="Subtitulo do artigo 1"
            cursos={cursos[0]}
          >
            Este é um texto do primeiro artigo...
          </Artigo>
          <Artigo
            titulo="Artigo 2"
            subtitulo="Subtitulo do artigo 2"
            cursos={cursos[1]}
          >
            Este é um texto do segundo artigo...
          </Artigo>
          <Artigo
            titulo="Artigo 3"
            subtitulo="Subtitulo do artigo 3"
            cursos={cursos[2]}
          >
            Este é um texto do terceiro artigo...
          </Artigo>
        </section>
      </main>
    </>
  );
};

export default Conteudo;
