import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../pages/Pages.css";

export default function Barra() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      navigate("/login");
    };
    
    return (
        <header className="barra">
        <div className="links">
        <Link to="/"> Home </Link>|<Link to="/login"> Login </Link>|<Link to="/cadastar-produto"> Criar Produto </Link>
        </div>
        <div className="usuario-info">
        {user ? (
          <>
            <span>Olá, {user.usuario}!</span>
            <button onClick={handleLogout} className="botao-logout"> Sair </button>
          </>
        ) : (
          <span>Visitante</span>
        )}
      </div>
    </header>
  );
}