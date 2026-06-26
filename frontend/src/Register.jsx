import { useState } from "react";
import "./Register.css";

export default function Register({ irALogin }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [rol, setRol] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nombre ||
      !correo ||
      !password ||
      !confirmar ||
      !vehiculo ||
      !rol
    ) {
      setError("Por favor complete todos los campos.");
      return;
    }

    if (password !== confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");

    alert(`
Registro exitoso

Nombre: ${nombre}
Correo: ${correo}
Vehículo: ${vehiculo}
Rol: ${rol}
    `);

    setNombre("");
    setCorreo("");
    setPassword("");
    setConfirmar("");
    setVehiculo("");
    setRol("");
  };

  return (
    <div className="contenedor">
      <section className="panel-marca">
        <div className="logo-wrapper">
          <img src="logo-_Park-blanco.png"></img>

          <p className="slogan">
          </p>
        </div>
      </section>

      <section className="panel-formulario">
        <form className="login-card" onSubmit={handleSubmit}>
          <h1 className="titulo">
            CREAR CUENTA
          </h1>

          <label>NOMBRE COMPLETO</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
          />

          <label>CORREO ELECTRÓNICO</label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={correo}
            onChange={(e) =>
              setCorreo(e.target.value)
            }
          />

          <label>CONTRASEÑA</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <label>CONFIRMAR CONTRASEÑA</label>
          <input
            type="password"
            placeholder="********"
            value={confirmar}
            onChange={(e) =>
              setConfirmar(e.target.value)
            }
          />

          <label>TIPO DE VEHÍCULO</label>
          <select
            className="select-rol"
            value={vehiculo}
            onChange={(e) =>
              setVehiculo(e.target.value)
            }
          >
            <option value="">
              Seleccione un vehículo
            </option>

            <option value="Carro">
              Carro
            </option>

            <option value="Moto">
              Moto
            </option>

            <option value="Bicicleta">
              Bicicleta
            </option>
          </select>

          <label>ROL</label>
          <select
            className="select-rol"
            value={rol}
            onChange={(e) =>
              setRol(e.target.value)
            }
          >
            <option value="">
              Seleccione un rol
            </option>

            <option value="Administrador">
              Administrador
            </option>

            <option value="Operador">
              Operador
            </option>

            <option value="Usuario">
              Usuario
            </option>
          </select>

          {error && (
            <p className="mensaje-error">
              {error}
            </p>
          )}

          <button type="submit">
            REGISTRARSE
          </button>

          <p className="texto-final">
            ¿Ya tienes cuenta?{" "}
            <span
              className="link"
              onClick={irALogin}
            >
              Iniciar sesión
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}