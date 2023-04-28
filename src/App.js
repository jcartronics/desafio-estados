import { useState } from "react";
import Login from "./components/Login";
import Alert from "./components/Alert";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [correctLogin, setCorrectLogin] = useState(false);

  const validarLogin = (email, password) => {
    if(email==="julio@carvajal.cl" && password==="123456"){
      setMensaje("Login exitoso");
      setCorrectLogin(true);
    }else{
      setMensaje("Los datos son incorrectos!");
      setCorrectLogin(false);
    }
  }

  return (
    <div className="desafio">
      <h3>Desafio - Estado de los componentes y eventos</h3>
      <Login onLogin={validarLogin}/>
      <Alert mensaje={mensaje} correctLogin={correctLogin}/>
    </div>
  );
}

export default App;