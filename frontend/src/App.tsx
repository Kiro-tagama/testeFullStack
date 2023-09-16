import '@picocss/pico';

import { BrowserRouter,Routes, Route } from "react-router-dom";

import Init from './screen/Init';
import Gerenciar from './screen/Gerenciar';
import Adicionar from './screen/Adicionar';
import Reservar from './screen/Reservar';
import NotFound from './screen/NotFound';

export default function App (){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/" element={<Init/>} />
        <Route path="/gerenciar" element={<Gerenciar/>} />
        <Route path="/add" element={<Adicionar/>} />
        <Route path="/reservar" element={<Reservar/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}