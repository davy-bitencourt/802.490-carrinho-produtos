import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from './pages/produtos.jsx'
import Login from "./pages/login.jsx";
import CriarLogin from "./pages/criarLogin.jsx";
import NoPage from "./pages/noPage.jsx"; 
import Dashboard from "./pages/dashboard.jsx";

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Produtos/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<CriarLogin/>}/>
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard/> </PrivateRoute>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App;
