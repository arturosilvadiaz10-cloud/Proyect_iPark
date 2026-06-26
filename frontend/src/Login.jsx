import { useState } from "react";
import "./style.css"; 

export default function Login({ irARegistro, alIniciarSesion }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !password) {
      setError("Por favor complete todos los campos.");
      return;
    }

    setError("");
    
    
    if (alIniciarSesion) {
      alIniciarSesion();
    }
  };

  return (
    <div className="contenedor">
      <section className="panel-marca">
        <div className="logo-wrapper">
          <h1 className="logo-text">
            <span className="logo-p">P</span>ark
          </h1>
          <p className="slogan">Gestión eficiente de estacionamientos</p>
        </div>
      </section>

      <section className="panel-formulario">
        <form className="login-card" onSubmit={handleSubmit}>
          <h1 className="titulo">INICIAR SESIÓN</h1>

          <label>CORREO ELECTRÓNICO</label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <label>CONTRASEÑA</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="mensaje-error">{error}</p>}

          <button type="submit">INGRESAR</button>

          <p className="texto-final">
            ¿No tienes cuenta?{" "}
            <span className="link" onClick={irARegistro}>
              Regístrate
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}