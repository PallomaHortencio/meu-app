import { BrowserRouter, Route, Switch } from "react-router-dom";

import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";

const App = () => {
  return (
    <>
      {/* BrowserRouter: container de rotas 
    (precisa envolver todos os componentes do App) */}
      <BrowserRouter>
        <Cabecalho />

        {/* Switch: mecanismo para troca/alternância de rotas */}
        <Switch>
          {/* Route: configuração de cada rota 
          (qual caminho, qual componente) */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>

        <Rodape />
      </BrowserRouter>
    </>
  );
};

export default App;
