import { useState } from "react";
import axios from "axios"; // Importación agregada
import "./style.css"; 

export default function Login({ irARegistro, alIniciarSesion }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función modificada para verificar credenciales en el backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!correo || !password) {
      setError("Por favor complete todos los campos.");
      return;
    }

    try {
      // Envía los datos al backend para verificar si existen
      const res = await axios.post('http://localhost:5000/api/login', { correo, password });

      // Si el backend responde con success: true, permite el ingreso
      if (res.data.success) {
        setError("");
        alIniciarSesion(); 
      }
    } catch (err) {
      // Si el usuario no existe o la contraseña falla, muestra el error
      setError("Correo o contraseña incorrectos.");
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