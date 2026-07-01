require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.post('/api/registro', async (req, res) => {
  const { id_usr, nombre, correo, apellido, password, rol } = req.body;
  
  try {
    const query = `
      INSERT INTO usuarios (id_usr, nombre, correo, apellido, password, rol) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *
    `;
    const values = [id_usr, nombre, correo, apellido, password, rol];
    
    await pool.query(query, values);
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("Error al insertar en DB:", error);
    res.status(500).json({ error: error.message });
  }
});

// NUEVA RUTA DE LOGIN AGREGADA
app.post('/api/login', async (req, res) => {
  const { correo, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM usuarios WHERE correo = $1 AND password = $2", [correo, password]);
    if (result.rows.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Servidor corriendo en el puerto 5000");
});