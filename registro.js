const form = document.getElementById('registroForm');
const msgSucesso = document.getElementById('msgSucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio real

    const nome = document.getElementById('nome').value.trim();
    const turma = document.getElementById('turma').value;
    const data = document.getElementById('data').value;

    if(nome === '' || turma === '' || data === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Salvar no LocalStorage como exemplo de registro
    let registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push({ nome, turma, data });
    localStorage.setItem('registros', JSON.stringify(registros));

    msgSucesso.textContent = `Almoço registrado para ${nome} no dia ${data}!`;
    form.reset();
});
