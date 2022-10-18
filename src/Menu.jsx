import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      {/* Trocar a tag <a> pelo componente NavLink e o "href" pelo "to":
      Isso ativará o carregamento assíncrono dos componentes e rotas (ESSENCIAL!) */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/servicos">Serviços</NavLink>
    </nav>
  );
};

export default Menu;
