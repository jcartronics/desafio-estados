import { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const validarEmail = (e) => {
        setEmail(e.target.value);
        setIsButtonDisabled(!e.target.value || !password);
    }

    const validarPassword = (e) => {
        setPassword(e.target.value);
        setIsButtonDisabled(!e.target.value || !email);
    }

    const validarDatos = (e) => {
        e.preventDefault();
        props.onLogin(email, password);
    }

    return (
        <form onSubmit={validarDatos}> 
            <div className="form-group">
                <label>Email</label>
                <input type="email" 
                name="email" 
                className="form-control"
                onChange={validarEmail} 
                value={email} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                name="password" 
                className="form-control"
                onChange={validarPassword} 
                value={password} />
            </div>
            <button disabled={isButtonDisabled} className="btn btn-dark mt-3" type="submit">Iniciar Sesión</button>
        </form>
    );
}

export default Login;