import "./emailAuthentication.css"
import { FaUser } from "react-icons/fa"
import PropTypes from 'prop-types'
import { useState } from "react";

const EmailAuthentication = ({ dispatch }) => {

    const[isPopupOpen, setPopupOpen] = useState(false);
    const[email,setEmail] = useState('');
    const[isEmailConfirmed, setEmailConfirmed] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.targer.value);
    };

    const handleEmailConfirmation = () => {
        if(email) {
            setIsEamilConfirmed(true);
            setPopupOpen(true);
        } else {
            setIsEmailConfirmed(false);
            alert('Insira um Email válido');
        }
    };

    const togglePopUp = () => {
        setPopupOpen(!isPopupOpen);
    }
    return (
        <div className="container-authentication">
            <h1>Confirme seu E-mail</h1>
            <div className="input-field">
                <input type="email" placeholder="E-mail" />
                <FaUser className="icon"/>
            </div>
            <div className="description">
                <p>Verifique seu E-mail e preencha o campo com o código de segurança</p>
            </div>
            <div className="input-field">
                <input type="number" placeholder="Código"/>
            </div>
            <button>Enviar para E-mail</button>
        </div>
    );
};

EmailAuthentication.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default EmailAuthentication;
