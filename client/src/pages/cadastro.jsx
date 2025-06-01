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