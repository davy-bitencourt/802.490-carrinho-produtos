import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import CriarLogin from "./pages/criarLogin.jsx";
import NoPage from "./pages/noPage.jsx"; 

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/criar-login" element={<CriarLogin/>}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
