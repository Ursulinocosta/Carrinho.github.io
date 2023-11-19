document.getElementById('signUp').addEventListener('click', function () {
    document.getElementById('container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', function () {
    document.getElementById('container').classList.remove('right-panel-active');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Lógica de login aqui
    alert('Login realizado com sucesso!');
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Lógica de cadastro aqui
    alert('Cadastro realizado com sucesso!');
});
