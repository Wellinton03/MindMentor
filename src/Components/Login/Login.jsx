import {FaUser, FaLock} from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";
import "./login.css";

  const Login = ({dispatch}) => {

  const [ userName, setUserName] = useState("")
  const [ password, setPassword] = useState("")

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
          <a href="#" onClick={() => dispatch({ type: 'EMAILAUTHENTICATION'})}> Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>Ainda não tem uma conta? <a href="#" onClick={() => dispatch({ type: 'CADASTRO'})}>Cadastre-se</a></p>
        </div>
        </form> 
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default Login
