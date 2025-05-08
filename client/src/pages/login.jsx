import { Outlet, Link } from "react-router-dom";
import "./Pages.css";

function login(){
    return (
    <div>
        <div className="mm">
            <p> Login </p>
        </div>

        <div>
            <p className="m"> Email </p>
            <input className="b" type="text" placeholder="email"/>
        </div>

        <div>
            <p className="m"> Senha </p>
            <input className="b" type="password" placeholder="senha"/>
        </div>

        <div className="m">
            <button className="bt"> Fazer Login </button>
        </div>

        <div className="l">
            <nav>
                <Link to="/cadastro"> <small>Não tenho conta</small> </Link>
            </nav>
        </div>
              
    </div>
    )
}

export default login;