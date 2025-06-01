import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Barra from "../components/barra.jsx";
import { useAuth } from "../contexts/AuthContext";
import "./Pages.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { user, login, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Chama a função do contexto
    const success = login(usuario, senha);
    if (success) { // Redireciona após login bem-sucedido
      navigate("/");
    } // Se falhar, o `error` será preenchido no contexto e exibiremos abaixo
  };

  return (
    <>
      <Barra />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
          <Link to="/cadastro" className="link-conta"> Criar uma conta, caso não haja </Link>
          <button type="submit" className="botao">Entrar</button>
          {error && <p className="erro">{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;