import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./router/RouterApp";


export function App() {


  return (
    <BrowserRouter>   
      <RouterApp />
    </BrowserRouter>
  );
}