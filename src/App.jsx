
import './App.css'
import Login from './Components/Login/Login'
import Cadastro from './Components/Cadastro/Cadastro'
import NewPassword from './Components/NewPassword/NewPassword'
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
    </div>
   );
}

export default App
