import "./cadastro.css"
import PropTypes from 'prop-types'

const Cadastro = ({dispatch}) => {
  return (
    <div className="container">
        <form>
        <h1>Cadastro</h1>
      <div className="input-Field">
        <input type="text" placeholder="Nome"  >
        </input>
      </div>
      <div className="input-Field">
        <input type="text" placeholder="UserName" />
      </div>
      <div className="input-Field">
        <input type="email" placeholder="E-mail" />
      </div>
          <div className="input-Field">
            <input type="password" placeholder="Senha" />
          </div>
          <div className="input-Field">
            <input type="password" placeholder="Confirme a senha" />
          </div>
          <div className="redirection-login">
            <p>Já tem uma conta? <a href="#" onClick={() => {dispatch({type: 'LOGIN'})}}>Login</a></p>
          </div>
          <button>Cadastrar</button>
        </form>
    </div>
  )
}
Cadastro.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default Cadastro
