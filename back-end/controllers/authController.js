const db = require('../confg/dbe');
const bcrypt = require('bcrypt');

// Registro
exports.cadastro = (req, res) => {
    const { name, email, password, cpf, telefone, idade } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    db.query('INSERT INTO usuario (name, email, password, cpf, telefone, idade) VALUES (?, ?, ?)', [name, email, hash], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(200).json({ message: 'User registered successfully' });
    });
};

// Login
exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM usuario WHERE email = ?', [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = results[0];
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    });
};