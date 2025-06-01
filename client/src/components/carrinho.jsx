import '../pages/Pages.css';

function Carrinho({ itens, fechar }) {
  return (
    <div className="carrinho-overlay">
      <div className="carrinho">
        <button className="fechar" onClick={fechar}>✕</button>
        <h2>Carrinho de Compras</h2>

        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {itens.map((item, index) => (
              <div className="conteinerprod" key={index}>
                <div>
                  <img width={100} height="fitPcontent" src={item.imagem} />
                </div>

                <div className="infoprod">
                  <label className="nome">{item.nome}</label>
                  <label className="preco">R$ {item.valor}</label>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
