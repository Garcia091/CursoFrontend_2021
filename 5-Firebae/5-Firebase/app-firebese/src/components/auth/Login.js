import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {startLoginEmailPassword, startGoogleLogin} from '../../actions/auth'
import '../../styles/style.css'

const Login = () => {
    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    //desestructuramos
    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <div className="Registro py-5 container text-center">

            <form className="form-signin">
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleLogin}
                >
                    Login
                </button>

                <div className="">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn btn-primary"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <div
                        className="google-btn btn-primary"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://image.flaticon.com/icons/png/512/20/20673.png" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Facebook</b>
                        </p>
                    </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
    
            </form>

        </div>
    );

}

export default Login
