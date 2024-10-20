const app = require('./app'); // Importa o aplicativo Express configurado em app.js

const PORT = process.env.PORT || 5500; // Define a porta do servidor a partir da variável de ambiente PORT ou usa 3000 como padrão

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`); // Inicia o servidor e imprime a URL
});