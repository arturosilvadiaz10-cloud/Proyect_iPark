const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send(' El servidor de la API de iPark está encendido y escuchando de forma correcta.');
});

app.use('/api/auth', require('./routes/auth')); 

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en: http://localhost:${PORT}`);
});