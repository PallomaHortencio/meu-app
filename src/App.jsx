import Cabecalho from "./components/layout/Cabecalho/Cabecalho";
import Conteudo from "./components/layout/Conteudo/Conteudo";
import Rodape from "./components/layout/Rodape/Rodape";

// function App() função mais antiga
// função mais moderna
const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </>
  );
};

export default App;
