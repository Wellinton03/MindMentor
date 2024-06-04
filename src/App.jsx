
import './App.css'
import Login from './Components/Login/Login'
import Cadastro from './Components/SignUp/Cadastro'
import NewPassword from './Components/NewPassword/NewPassword'
import EmailAuthentication from './Components/EmailAuthentication/EmailAuthentication'
import CodeAuthentication from './Components/CodeAuthentication/CodeAuthentication'
import React, { useReducer } from 'react'

const initialState = {screen: 'login'};

function reducer(state, action) {
  switch (action.type)  {
    case 'LOGIN':
      return {screen: 'login'};
      case 'CADASTRO':
        return { screen: 'cadastro'};
        case 'NEWPASSWORD':
          return { screen: 'newPassword'};
          case 'EMAILAUTHENTICATION':
            return { screen: 'emailAuthentication'};
            case 'CODEAUTHENTICATION':
            return { screen: 'codeAuthentication'};
        default :
          throw new Error('Ação desconhecida');
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {state.screen === 'login' && <Login dispatch={dispatch} />}
      {state.screen === 'cadastro' && <Cadastro dispatch={dispatch} />}
      {state.screen === 'newPassword' && <NewPassword dispatch={dispatch} />}
      {state.screen === 'emailAuthentication' && <EmailAuthentication dispatch={dispatch}/>}
      {state.screen === 'codeAuthentication' && <CodeAuthentication dispatch={dispatch}/>}
    </div>
  );
}

export default App
