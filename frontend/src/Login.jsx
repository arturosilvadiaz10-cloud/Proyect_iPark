import { useState } from "react";
import "./Login.css";

export default function Login({ irARegistro }) {
  const [usuario, setUsuario] = useState("admin@ipark.com");
  const [password, setPassword] = useState("123456");
  const [recordar, setRecordar] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido ${usuario}`);
  };

  return (
    <div className="contenedor">
      <section className="panel-marca">
        <div className="logo-wrapper">+
            <img src="logo-_Park-blanco.png"></img>


          <p className="slogan">
            ADMINISTRADOR DE PARQUEADEROS 
          </p>
        </div>
      </section>

      <section className="panel-formulario">
        <form className="login-card" onSubmit={handleSubmit}>
          <h1 className="titulo">
            INICIAR SESIÓN
          </h1>

          <label>USUARIO</label>

          <input
            className="input-verde"
            type="email"
            value={usuario}
            onChange={(e) =>
              setUsuario(e.target.value)
            }
          />

          <label>CONTRASEÑA</label>

          <input
            className="input-normal"
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <div className="opciones">
            <label>
              <input
                type="checkbox"
                checked={recordar}
                onChange={(e) =>
                  setRecordar(e.target.checked)
                }
              />
              recordar la sesion 
            </label>

            <a href="/">
              ¿Olvido su contraseña?
            </a>
          </div>

          <button type="submit">
            INGRESAR
          </button>

          <p className="texto-final">
            ¿No tienes cuenta?{" "}
            <span
              className="link"
              onClick={irARegistro}
            >
              Crear cuenta
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}