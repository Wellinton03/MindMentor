import './newPassword.css'
import { useState } from 'react'
import PropTypes from 'prop-types'


const NewPassword = ({dispatch}) => {
    return(
        <div className="container">
                <h1>Redefina sua senha</h1>
            <div className="input-field">
                <input type="password" placeholder="Digite sua nova senha" />
            </div>
            <div className="input-field">
                <input type="password" placeholder="Repita a senha"/>
            </div>
            <button>Alterar</button>
            <button onClick={() => {dispatch({type: 'LOGIN'})}}>Login</button>
        </div>
    );

}

export default NewPassword