import { useState } from "react";
import Artigo from "../Artigo";

const Conteudo = () => {
  const [corFundo, setCorFundo] = useState("");
  const [contador, setContador] = useState(0);
  const atualizaContagem = () => setContador(contador + 1);

  const fundoAmarelo = () => setCorFundo("yellow");
  const fundoAzul = () => setCorFundo("blue");
  const fundoVermelho = () => setCorFundo("red");

  return (
    <>
      <main style={{ backgroundColor: corFundo }}>
        <button onMouseOver={fundoAmarelo}>Amarelo</button>
        <button onMouseOver={fundoAzul}>Azul</button>
        <button onMouseOver={fundoVermelho}>Vermelho</button>

        <section>
          <h2 onClick={() => setContador(contador + 1)}>{contador}</h2>
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
