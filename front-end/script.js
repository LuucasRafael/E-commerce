// Register

document.getElementById('postBtn')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const password = document.getElementById('password').value;

    fetch('<http://localhost:3000/back-end/app>', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, idade, telefone, cpf}),
    });

    const data = await response.json();
    alert(data.message);
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('<http://localhost:3000/front-end/login>', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    alert(data.message);
});