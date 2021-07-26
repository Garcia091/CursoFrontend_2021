import React from 'react'
import { useForm } from '../../hooks/useForm'
import {Link} from 'react-router-dom'
import '../../styles/style.css'

const Registro = () => {

  const [values, handleInputChange] = useForm({
    nombre:'',
    email: '',
    password: '',
    password2: ''
  })

  //desestructuramos
  const {nombre, email, password,password2 } = values;

  const handleLogin = (e) => {
    e.preventDefault();
  }

 

  return (
    <div className="Registro py-5 container text-center">
      <form className="form-signin" onSubmit={handleLogin}>
        <h1 class="h3 mb-3 font-weight-normal">
          ¡Registrate en nuestro sistema!
        </h1>
        <label for="inputemailaddress" class="sr-only">
          Correo electrónico
        </label>

        <input
          type="text"
          placeholder="Name"
          name="nombre"
          className="form-control"
          autoComplete="off"
          value={nombre}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control"
          autoComplete="off"
          required=""
          value={email}
          onChange={handleInputChange}
        />
    
        <input
          type="Password"
          name="Password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="Password"
          name="Password2"
          id="inputPassword2"
          className="form-control"
          placeholder="Confirm password"
          required=""
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-1"
        >
          Register
        </button>
        <br />
        <Link
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>

      </form>

    </div>
  );

}

export default Registro
