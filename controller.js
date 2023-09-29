'use stript'; // Modo restrito // Consumindo API de CEP, do ViaCep // https://viacep.com.br/

// Função para limpar o formulario
const limparformulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}