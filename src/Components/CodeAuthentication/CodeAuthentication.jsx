import "./codeAuthentication.css"
import { FaUser,FaLock } from "react-icons/fa"
import PropTypes from 'prop-types'
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const CodeAuthentication = ({ dispatch }) => {
    return (
        <div className="container-authentication">
            <IoMdArrowRoundBack onClick={() => dispatch({ type: 'EMAILAUTHENTICATION'})}className='back'/>
            <h1>Confirme o código de segurança</h1>
            <div className="input-field">
                <input type="text" placeholder="Código"/>
                <FaLock className="icon"/>
            </div>
            <button onClick={() => dispatch({ type: 'NEWPASSWORD'})}>Enviar código</button>
        </div>
    );
};

CodeAuthentication.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default CodeAuthentication;
