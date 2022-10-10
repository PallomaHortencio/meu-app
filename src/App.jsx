import Cabecalho from "./components/layout/Cabecalho";
import Conteudo from "./components/layout/Conteudo";
import Rodape from "./components/layout/Rodape";

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
