import { useState } from 'react';
import axios from 'axios';

export default function Register({ irALogin, alRegistrarse }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '', // Agregado porque es requerido en la DB
    correo: '',
    password: '',
    confirmPassword: '',
    rol: 'usuario' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Generar ID único de 7 dígitos para cumplir con PRIMARY KEY
    const generatedId = Math.floor(1000000 + Math.random() * 9000000).toString();

    try {
      await axios.post('http://localhost:5000/api/registro', {
        id_usr: generatedId,
        nombre: formData.nombre,
        apellido: formData.apellido,
        correo: formData.correo,
        password: formData.password,
        rol: formData.rol
      });

      alert("¡Registro exitoso!");
      alRegistrarse(); 
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al conectar con el servidor. Revisa la consola.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>¡REGISTRA TU CUENTA!</h2>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input name="apellido" placeholder="Apellido" onChange={handleChange} required />
      <input name="correo" type="email" placeholder="Correo" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <input name="confirmPassword" type="password" placeholder="Confirmar Contraseña" onChange={handleChange} required />
      <button type="submit">REGISTRARSE</button>
    </form>
  );
}