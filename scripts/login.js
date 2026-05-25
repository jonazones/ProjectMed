// Seleciona todos os botões e formulários
const tabs = document.querySelectorAll('.tab-btn');
const forms = document.querySelectorAll('.formulario');

// Adiciona evento de clique a cada botão
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove "ativo" de todos
    tabs.forEach(btn => btn.classList.remove('active'));
    forms.forEach(form => form.classList.remove('active'));

    // Adiciona "ativo" ao botão clicado e seu formulário
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});


const form = document.getElementById('cadastroFuncionario');
const funcao = document.getElementById('funcao');
const crm = document.getElementById('crm');

form.addEventListener('submit', function(e) {
    const func = funcao.value.toLowerCase();
    if ((func === 'medico' || func === 'enfermeiro') && crm.value.trim() === '') {
        e.preventDefault();
        alert('O CRM é obrigatório para Médicos e Enfermeiros.');
        crm.focus();
    }
});


