const form = document.getElementById('cadastroForm');
const msgSucesso = document.getElementById('msgSucesso');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const ra = document.getElementById('ra').value.trim();
    const turma = document.getElementById('turma').value;

    if (nome === '' || ra === '' || turma === '') {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    // Envia os dados para o servidor (SQLite)
    const resposta = await fetch('/api/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ra, nome, turma })
    });

    const resultado = await resposta.json();

    if (resultado.success) {
        msgSucesso.textContent = resultado.message;
        msgSucesso.style.color = "green";
        form.reset();
    } else {
        msgSucesso.textContent = resultado.message;
        msgSucesso.style.color = "red";
    }
});
