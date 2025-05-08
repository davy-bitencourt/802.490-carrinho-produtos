import './produtos.css'
import { produtos } from '../assets/produtos'

function Produtos() {
  const itens = produtos; 
  
  return (
    <div className='b2'>

      {itens.map((item, i) => ( //map é usado para percorrer array

        <div className='conteinerprod' key={i}>

        <div>
          <img width={100} height='fitcontent' src={item.imagem}/>
        </div>

        <div className='infoprod'>
          <label className='nome'> {item.nome} </label>
          <label className='preco'> R$ {item.valor} </label>
        </div>
        
        <div>
          <button className='botao'> Comprar </button>
        </div>

        </div>

      ))}
    </div>
  )
}

export default Produtos
