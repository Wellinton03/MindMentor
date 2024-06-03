import "./emailAuthentication.css"
import { FaUser } from "react-icons/fa"
import PropTypes from 'prop-types';

const EmailAuthentication = ({ dispatch }) => {
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
