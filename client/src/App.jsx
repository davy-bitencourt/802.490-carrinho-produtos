import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from './pages/produtos.jsx'
import Login from "./pages/login.jsx";
import CriarLogin from "./pages/criarLogin.jsx";
import NoPage from "./pages/noPage.jsx"; 

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Produtos/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<CriarLogin/>}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
