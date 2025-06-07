import '../pages/Pages.css';

function Carrinho({ itens, fechar, removerItem, finalizarCompra }) {
  return (
    <div className="carrinho-overlay">
      <div className="carrinho">
        <button className="fechar" onClick={fechar}>✕</button>
        <h2>Carrinho de Compras</h2>

        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="carrinho-itens">
              {itens.map((item, index) => (
                <div className="conteinerprod" key={index}>

                  <div><label className="id">{item.id}</label></div>

                  <div><img width={100} src={item.imagem} /></div>

                  <div className="infoprod">
                    <label className="nome">{item.nome}</label>
                    <label className="preco">R$ {item.valor}</label>
                  </div>

                  <button className="botao" onClick={() => removerItem(index)}>Remover</button>
                </div>
              ))}
            </div>

            <div className="carrinho-footer">
              <button className="botao-finalizar" onClick={finalizarCompra}>Finalizar Compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carrinho;

