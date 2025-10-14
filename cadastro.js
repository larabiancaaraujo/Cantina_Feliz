const form = document.getElementById('cadastroForm');
const msgSucesso = document.getElementById('msgSucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio real do formulário

    const nome = document.getElementById('nome').value.trim();
    const ra = document.getElementById('ra').value.trim(); // Alterado de email para RA
    const turma = document.getElementById('turma').value;

    if(nome === '' || ra === '' || turma === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Aqui você poderia enviar os dados para o servidor via fetch/AJAX
    // Para agora, vamos apenas mostrar uma mensagem de sucesso
    msgSucesso.textContent = `Aluno ${nome} (RA: ${ra}) cadastrado com sucesso!`;

    // Limpar o formulário
    form.reset();
});

