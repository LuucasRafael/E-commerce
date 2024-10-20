const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbe'        
});

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao Banco de Dados:', err);
      return;
    }
    console.log('Conectado ao Banco de Dados');
  });

  connection.query("SELECT id, nome, email FROM usuario", function(err, rows, fields) {
    if (!err) {
      console.log("Resultado:", rows); // Se a consulta for bem-sucedida, exibe o resultado no console
    } else {
      console.log('Erro:', err); // Se houver um erro na consulta, exibe a mensagem de erro no console
    }
  });


 