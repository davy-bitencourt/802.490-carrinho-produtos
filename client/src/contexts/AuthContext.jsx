// src/contexts/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import { usuarios } from "../assets/users.js"; // seu array de usuários estáticos

// 1) Cria o contexto
const AuthContext = createContext();

// 2) Provider que vai envolver toda a sua aplicação
export function AuthProvider({ children }) {
  // Carrega do localStorage, se já houver um usuário salvo
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("usuarioLogado");
    return stored ? JSON.parse(stored) : null;
  });
  const [error, setError] = useState("");

  // Toda vez que `user` mudar, atualiza o localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
    } else {
      localStorage.removeItem("usuarioLogado");
    }
  }, [user]);

  // Função de login: verifica contra o array `usuarios`
  const login = (username, password) => {
    const found = usuarios.find(
      (u) => u.usuario === username && u.senha === password
    );
    if (found) {
      setError("");
      setUser(found);
      return true;
    } else {
      setError("Usuário ou senha inválidos.");
      return false;
    }
  };

  // Função de logout: limpa o state e localStorage
  const logout = () => {
    setUser(null);
    setError("");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook de conveniência para usar o contexto em outros componentes
export function useAuth() {
  return useContext(AuthContext);
}
