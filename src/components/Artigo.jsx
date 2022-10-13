const Artigo = (props) => {
  return (
    <article>
      <h3>{props.titulo}</h3>
      <h4>{props.subtitulo}</h4>
      <p>{props.children}</p>
      <h4>{props.cursos}</h4>
    </article>
  );
};

export default Artigo;
