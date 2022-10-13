import Artigo from "../Artigo";

const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "Artigo 1",
      subtitulo: "Este é o texto do primeiro artigo...",
      texto: "Este é o conteúdo do artigo um...",
      cursos: "HTML",
    },

    {
      id: 2,
      titulo: "Artigo 2",
      subtitulo: "Este é o texto do segundo artigo...",
      texto: "Este é o conteúdo do artigo dois...",
      cursos: "CSS",
    },

    {
      id: 3,
      titulo: "Artigo 3",
      subtitulo: "Este é o texto do terceiro artigo...",
      texto: "Este é o conteúdo do artigo três...",
      cursos: "JavaScript",
    },
  ];

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

          {artigos.map((artigo) => (
            <Artigo
              key={artigo.id}
              titulo={artigo.titulo}
              subtitulo={artigo.subtitulo}
              cursos={artigo.cursos}
            >
              {artigo.texto}
            </Artigo>
          ))}
        </section>
      </main>
    </>
  );
};

export default Conteudo;
