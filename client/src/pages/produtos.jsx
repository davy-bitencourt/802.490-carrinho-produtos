import './Pages.css';
import { useState } from 'react';
import { produtos } from '../assets/produtos';
import Barra from '../components/barra.jsx';
import Carrinho from '../components/carrinho.jsx';

function Produtos() {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  const alternarCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  return (
    <div>

      <div className="bt">
        <Barra />
        <button className="botao-carrinho" onClick={alternarCarrinho}> 🛒 Carrinho ({carrinho.length})</button>
      </div>

      {mostrarCarrinho && <Carrinho itens={carrinho} fechar={alternarCarrinho} />}

      <div className="b2">
        {produtos.map((item, i) => (
          <div className="conteinerprod" key={i}>
            <div>
              <img width={100} height="fit-content" src={item.imagem} />
            </div>

            <div className="infoprod">
              <label className="nome">{item.nome}</label>
              <label className="preco">R$ {item.valor}</label>
            </div>

            <div>
              <button className="botao" onClick={() => adicionarAoCarrinho(item)}> Comprar </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;