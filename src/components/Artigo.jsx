/*
prop sendo chamado manualmente
const Artigo = (props) => {
  return (
    <article>
      <h3>{props.titulo}</h3>
      <h4>{props.subtitulo}</h4>
      <p>{props.children}</p>
      <h4> Curso: {props.cursos}</h4>
    </article>
  );
}; */

/* Acesso ás props usando destrutcturing de objeto 
usando as {} o programa entende que é um prop*/

const Artigo = ({ titulo, subtitulo, children, cursos }) => {
  return (
    <article>
      <h3>{titulo}</h3>
      <h4>{subtitulo}</h4>
      <p>{children}</p>
      <h4> Curso: {cursos}</h4>
    </article>
  );
};

export default Artigo;
