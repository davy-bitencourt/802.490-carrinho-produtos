import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Pages.css";

function login(){
    const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); 
  };

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
            <button className="bt" onClick={handleLogin}> Fazer Login </button>
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