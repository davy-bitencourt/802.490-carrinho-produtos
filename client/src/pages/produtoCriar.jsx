import { useState, useEffect } from "react";
import Barra from "../components/barra";
import { produtos as produtosIniciais } from "../assets/produtos";
import "./Pages.css";

function ProdutoCriar() {
  const [produtos, setProdutos] = useState(() => {
    const salvo = localStorage.getItem("produtos");
    return salvo ? JSON.parse(salvo) : produtosIniciais;
  });

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = { nome, valor: parseFloat(preco), imagem };

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
          <button type="submit" className="botao"> {editandoIndex !== null ? "Salvar Alterações" : "Cadastrar Produto"}</button>
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
              <p>R$ {item.valor.toFixed(2)}</p>
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
