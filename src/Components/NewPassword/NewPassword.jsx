import './newPassword.css';
import {FaLock} from "react-icons/fa";
import { useState } from 'react';
import PropTypes from 'prop-types';


const NewPassword = ({dispatch}) => {
    return(
        <div className="container-newPass">
                <h1>Redefina sua senha</h1>

            <div className="input-field">
                <input type="password" placeholder="Digite sua nova senha" />
                <FaLock className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" placeholder="Repita a senha"/>
                <FaLock className="icon"/>
            </div>
            <button onClick={() => {dispatch({type: 'LOGIN'})}}>Confirmar alteração</button>
            <button onClick={() => {dispatch({type: 'LOGIN'})}}>Cancelar</button>
        </div>
    );

};

NewPassword.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default NewPassword