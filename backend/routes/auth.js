const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/registro', async (req, res) => {
    const { nombre, apellido, correo, telefono, password, id_rol } = req.body;
    const fakeHash = `$2b$10$EixZaYVK1eG..fake_${password}`; 

    try {
        await pool.query('BEGIN');

        const userQuery = `
            INSERT INTO usuarios (nombre, apellido, correo, telefono, password_hash)
            VALUES ($1, $2, $3, $4, $5) RETURNING id_usuario;
        `;
        const userRes = await pool.query(userQuery, [nombre, apellido, correo, telefono, fakeHash]);
        const id_usuario = userRes.rows[0].id_usuario;
        const rolAsignado = id_rol || 3; 
        const rolQuery = `INSERT INTO usuarios_roles (id_usuario, id_rol) VALUES ($1, $2);`;
        await pool.query(rolQuery, [id_usuario, rolAsignado]);

        await pool.query('COMMIT');
        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error(error);
        if (error.code === '23505') return res.status(400).json({ error: 'El correo ya está registrado' });
        res.status(500).json({ error: 'Error en el servidor al registrar' });
    }
});

router.post('/login', async (req, res) => {
    const { correo, password } = req.body;
    try {
       
        const queryText = `
            SELECT u.id_usuario, u.nombre, u.apellido, u.correo, u.password_hash, r.nombre_rol
            FROM usuarios u
            INNER JOIN usuarios_roles ur ON u.id_usuario = ur.id_usuario
            INNER JOIN roles r ON ur.id_rol = r.id_rol
            WHERE u.correo = $1 AND u.activo = TRUE;
        `;
        const resultado = await pool.query(queryText, [correo]);

        if (resultado.rows.length === 0) {
            return res.status(401).json({ error: 'Credenciales incorrectas o usuario inactivo' });
        }

        const usuario = resultado.rows[0];
        
        if (!usuario.password_hash.includes(password)) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        res.json({
            mensaje: 'Ingreso exitoso',
            usuario: {
                id: usuario.id_usuario,
                nombre: `${usuario.nombre} ${usuario.apellido}`,
                correo: usuario.correo,
                rol: usuario.nombre_rol
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});

router.post('/recuperar-password', async (req, res) => {
    const { correo } = req.body;
    try {
        const userCheck = await pool.query('SELECT id_usuario FROM usuarios WHERE correo = $1', [correo]);
        if (userCheck.rows.length === 0) {
            return res.status(404).json({ error: 'El correo no pertenece a ningún usuario registrado' });
        }

        const id_usuario = userCheck.rows[0].id_usuario;
        const codigoOtp = Math.floor(100000 + Math.random() * 900000).toString(); 
        
        const fechaExpiracion = new Date();
        fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + 15); 

        const queryText = `
            INSERT INTO codigos_recuperacion (id_usuario, correo, codigo_verificacion, fecha_expiracion)
            VALUES ($1, $2, $3, $4);
        `;
        await pool.query(queryText, [id_usuario, correo, codigoOtp, fechaExpiracion]);
        res.json({ mensaje: 'Código de recuperación enviado al correo', codigo_simulado: codigoOtp });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la recuperación' });
    }
});

module.exports = router;