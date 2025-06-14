import './Pages.css';
import { useState, useEffect } from 'react';
import { produtos } from '../assets/produtos';
import Barra from '../components/barra.jsx';
import Carrinho from '../components/carrinho.jsx';
import { useNavigate } from "react-router-dom";

function Produtos() {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (!user) {
      navigate("/login");
    }
  }, []);

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  const removerItem = (id) => {
    const novoCarrinho = carrinho.filter((item, index) => index !== id);
    setCarrinho(novoCarrinho);
  };

  const finalizarCompra = () => {
    setCarrinho([]);
  };

  const alternarCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  return (
    <div>
      <div>
        <Barra />
        <button className="botao-carrinho" onClick={alternarCarrinho}> 🛒 Carrinho ({carrinho.length})</button>
      </div>

      {mostrarCarrinho && (
        <Carrinho itens={carrinho} fechar={alternarCarrinho} removerItem={removerItem} finalizarCompra={finalizarCompra}/>
      )}

      <div className="b2">
        {produtos.map((item, i) => (
          <div className="conteinerprod" key={i}>
            <div>
              <label className="id">{item.id}</label>
            </div>

            <div>
              <img width={100} height="fit-content" src={item.imagem} />
            </div>

            <div className="infoprod">
              <label className="nome">{item.nome}</label>
              <label className="preco">R$ {item.valor}</label>
            </div>

            <div>
              <button className="botao" onClick={() => adicionarAoCarrinho(item)}>Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
