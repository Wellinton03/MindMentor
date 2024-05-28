import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
const Login = () => {

  const [userName, setUserName] = useState("")
  const [ Password, setPassword] = useState("")

const handleSubmit = (event) => {
  event.preventDefault();

  console.log("Enviado")
}

  return (
    <div className="container">
       <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
        <input   type="email" placeholder='E-mail' onChange={(e) => setUserName(e.target.value)} />
        <FaUser className="icon"/>
        </div>
        <div className="input-field">
            <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon"/>
        </div>
        <div className="recall-forget">
          <label >
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#"> Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
        </form> 
    </div>
  )
}

export default Login