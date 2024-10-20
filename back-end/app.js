
require('dotenv').config(); 
const express = require('express');
const app = express(); 

app.use(express.json()); 

const authRoutes = require('./routes/authRoutes'); // Importa as rotas de autenticação

app.use('/api/auth', authRoutes); // Define o prefixo '/api/auth' para as rotas de autenticação

module.exports = app; // Exporta a instância do aplicativo para ser usada em outros arquivos
