import "./emailAuthentication.css"
import { FaUser,FaLock } from "react-icons/fa"
import PropTypes from 'prop-types'
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const EmailAuthentication = ({ dispatch }) => {
    return (
        <div className="container-authentication">
           <IoMdArrowRoundBack onClick={() => dispatch({ type: 'LOGIN'})}className='back'/>
            <h1>Confirme seu E-mail</h1>
            <div className="input-field">
                <input type="email" placeholder="E-mail" />
                <FaUser className="icon"/>
            </div>
            <button onClick={() => dispatch({ type: 'CODEAUTHENTICATION'})}>Enviar para E-mail</button>
        </div>
    );
};

EmailAuthentication.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default EmailAuthentication;
