import "./cadastro.css"

const Cadastro = () => {
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
            <p>Já tem uma conta? <a href="#">Login</a></p>
          </div>
          <button>Cadastrar</button>
        </form>
    </div>
  )
}

export default Cadastro
