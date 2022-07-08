import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="cadastro" element={<Registration />}/>
    </Routes>
  )
}
