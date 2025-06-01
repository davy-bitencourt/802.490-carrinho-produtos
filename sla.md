quero que que vc revise o código e retire os estilos não utilizados do Pages.css

produto.jsx:
import './Pages.css';
import { useState } from 'react';
import { produtos } from '../assets/produtos';
import Barra from '../components/barra.jsx';
import Carrinho from '../components/carrinho.jsx';
import { useEffect } from "react";
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

  const alternarCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  return (
    <div>

      <div>
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

cadastro.jsx:
import "./Pages.css";
import Barra from "../components/barra.jsx";

export default function Cadastro(){
    return (
    <div>
        
        <Barra/>

        <div className="mm">
            <p> Cadastro </p>
        </div>

        <div>
            <p className="m"> Nome Completo </p>
           
            <div className="m">
                <input className="b" type="text"/>
            </div>
        </div>

        <div>
            <p className="m"> Email </p>

            <div className="m">
                <input className="b" type="text"/>
            </div>
        </div>

        <div>
            <p className="m"> Senha </p>

            <div className="m">
                <input className="b" type="password"/>
            </div>
        </div>
        
        <div>
            <p className="m"> Confirmar Senha </p>
            
            <div className="m">
                <input className="b" type="password"/>
            </div>
        </div>

        <div className="m">
            <input type="checkbox"/> <p> <small>Li e Concordo com os Termos e Condições</small> </p>
        </div>

        <div className="m">
            <button className="bt"> Criar Conta </button>
        </div>
    </div>
    )
}

login.jsx:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Barra from "../components/barra.jsx";
import { useAuth } from "../contexts/AuthContext";
import "./Pages.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { user, login, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Chama a função do contexto
    const success = login(usuario, senha);
    if (success) { // Redireciona após login bem-sucedido
      navigate("/");
    } // Se falhar, o `error` será preenchido no contexto e exibiremos abaixo
  };

  return (
    <>
      <Barra />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
          <button type="submit" className="botao">Entrar</button>
          {error && <p className="erro">{error}</p>}
        </form>
      </div>
    </>
  );
}
export default Login;

produtoCriar.jsx:
import { useState } from "react";
import Barra from "../components/barra";
import "./Pages.css";

function ProdutoCriar() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = { nome, valor: preco, imagem };

    if (editandoIndex !== null) {
      const novosProdutos = [...produtos];
      novosProdutos[editandoIndex] = novoProduto;
      setProdutos(novosProdutos);
      setEditandoIndex(null);
    } else {
      setProdutos([...produtos, novoProduto]);
    }

    setNome("");
    setPreco("");
    setImagem("");
  };

  const editarProduto = (index) => {
    const produto = produtos[index];
    setNome(produto.nome);
    setPreco(produto.valor);
    setImagem(produto.imagem);
    setEditandoIndex(index);
  };

  const excluirProduto = (index) => {
    const novosProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(novosProdutos);
    if (editandoIndex === index) {
      setNome("");
      setPreco("");
      setImagem("");
      setEditandoIndex(null);
    }
  };

  return (
    <div>
      <Barra />
      <div className="form-container">
        <h2>{editandoIndex !== null ? "Editar Produto" : "Cadastrar Produto"}</h2>
        <form onSubmit={handleSubmit}>
          
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
          <input type="number" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} required/>
          <input type="text" placeholder="URL da Imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} required/>

          <button type="submit" className="botao">
            {editandoIndex !== null ? "Salvar Alterações" : "Cadastrar Produto"}
          </button>
        </form>
      </div>

      <div className="lista-produtos">
        <h3>Produtos Cadastrados</h3>
        {produtos.length === 0 && <p>Nenhum produto cadastrado.</p>}
        {produtos.map((item, index) => (
          <div className="produto-item" key={index}>
            <img src={item.imagem} alt={item.nome} width={80} />
            <div>
              <p><strong>{item.nome}</strong></p>
              <p>R$ {item.valor}</p>
            </div>
            <div>
              <button className="editar" onClick={() => editarProduto(index)}>✏️</button>
              <button className="excluir" onClick={() => excluirProduto(index)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProdutoCriar;

noPage.jsx:
function noPage(){
    return (
     <>
        <div>
            <p> A página que você está buscando simplesmente não existe! </p>
        </div>
     </>   
    )
}
export default noPage;

Pages.css:
#root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-size: 1rem;
  
  }

.m {
    display: flex;
    justify-content: center;
}

.mm {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
}

.b {
    padding: 0.4rem;
}

.bt{
    margin-top: 1rem;

    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;

    font-size: medium;
}

.l{
    display: flex;
    justify-content: center;
    padding: 0.5rem;
}

  
  .b2{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  
  .conteinerprod{
    background-color: white;
    width: 15rem;
    height: 16rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 6px #aaaaaa;
    margin: 0.5rem;
  }
  
  .infoprod {
    display: grid;
    grid-template-rows: 2;
    padding-bottom: 0.2rem;
  }
  
  .nome{
    color: black;
  }
  
  .preco {
    color: orange;
    font-weight: bold;
  }
  
  .botao {
    background-color: orange;
    color: white;
    border: none;
    width: 13rem;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
  }
  
  .botao:hover {
    background-color: #e69500; /* tom mais escuro de laranja */
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .botao:active {
    transform: scale(0.98);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  

  .conteinerBar{
    background-color: orange;
    color: white;
    width: auto;
    height: fit-content;
    border-radius: 1rem;
    font-size: 1.3rem;
  }

  .fontbar {
    padding: 0.5rem;
    color: white;
  }
  
  .fontbar a{
    text-decoration: none;
    color: inherit;
  }

  .carrinho-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
  }
  
  .carrinho {
    width: 300px;
    background-color: white;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
.fechar {
  all: unset; /* remove TUDO que o botão tem por padrão */
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  top: 10px;
  right: 15px;
  color: #333;
  transition: color 0.2s;
}

.fechar:hover {
  color: red;
}

.botao-carrinho {
  position: fixed; /* ou use flexbox na barra se preferir */
  top: 10px;
  right: 20px;

  background-color: orange;
  color: white;
  border: none;
  border-radius: 0.2rem;

  padding: 0.8rem 1.2rem;
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.botao-carrinho:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.form-container {
  max-width: 400px;
  margin: 2rem auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-container label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-container input {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  font-size: 1rem;
}

.form-container .botao {
  background-color: orange;
  border: none;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
}

.form-container .botao:hover {
  background-color: darkorange;
}

.lista-produtos {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}

.produto-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fafafa;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.4rem;
  justify-content: space-between;
}

.produto-item img {
  border-radius: 0.4rem;
}

.produto-item button {
  margin-left: 0.4rem;
  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1rem;
}

button.editar {
  background-color: #5cb85c;
  color: white;
}

button.excluir {
  background-color: #d9534f;
  color: white;
}

.barra {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 1rem 2rem;
  color: white;
}

.links a {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  color: white;
}

.usuario-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: white;
}

.botao-logout {
  background: white;
  color: orange;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: bold;
}
