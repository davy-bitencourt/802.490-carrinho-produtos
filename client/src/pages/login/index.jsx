import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../components/context/auth";
import Button from "./button";

export default function Login() {
  const navigate = useNavigate();

  const { teste, setAuth } = useContext(AuthContext);

  function login() {
    setAuth(true);
    navigate("/produtos");
  }

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
            <button className="bt" onClick={() => login()}>Entrar </button>
        </div>

        <div className="l">
            <nav>
                <Link to="/cadastro"> <small>Não tenho conta</small> </Link>
            </nav>
        </div>
              
    </div>
    )
}
