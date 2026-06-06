// ======= Menu de abas =======
const tabs = document.querySelectorAll('.tab-btn');
const forms = document.querySelectorAll('.formulario');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove a classe "active" de todos os botões e formulários
        tabs.forEach(btn => btn.classList.remove('active'));
        forms.forEach(form => form.classList.remove('active'));

        // Adiciona "active" ao botão clicado e ao formulário correspondente
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
