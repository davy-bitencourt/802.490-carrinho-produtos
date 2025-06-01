import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from './pages/produtos.jsx'
import Login from "./pages/login.jsx";
import Cadastro from "./pages/cadastro.jsx";
import NoPage from "./pages/noPage.jsx"; 
import ProdutoCriar from "./pages/produtoCriar.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Produtos/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/cadastar-produto" element={<ProdutoCriar/>}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </>
  )
}

export default App;