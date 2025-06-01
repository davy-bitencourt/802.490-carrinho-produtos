import { Link } from "react-router-dom";
import "../pages/Pages.css";

export default function Barra(){
    return (
    <div className="conteinerBar">
        <div>
           <p className="fontbar">
                <Link to="/"> Home </Link>|<Link to="/login"> Login </Link>|<Link to="criar-produto"> Criar Produto </Link>
            </p> 
        </div>
    </div>
    )
}