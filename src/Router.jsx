import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";
import { Login } from './pages/Login';
import { Animals } from "./pages/Animals";
import { Message } from './pages/Message';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="cadastro" element={<Registration />}/>
      <Route path="login" element={<Login />} />
      <Route path="animais" element={<Animals />} />
      <Route path="mensagem" element={<Message />} />
    </Routes>
  )
}
