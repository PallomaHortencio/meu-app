import Menu from "../../Menu";

/* Objeto de estilos CSS */
const estilos = {
  color: "white",
  backgroundColor: "black",
};

const Cabecalho = () => {
  return (
    /* CSS in JS: estilos CSS embutidos no meio do JavaScript */

    /* CSS inline (usa propriedade style e sintaxe de objeto) */
    <header style={{ backgroundColor: "lightblue", textAlign: "center]" }}>
      <h1 style={estilos}>Inerface React</h1>
      <Menu />
    </header>
  );
};

export default Cabecalho;
