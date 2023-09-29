'use stript'; // Modo restrito // Consumindo API de CEP, do ViaCep // https://viacep.com.br/

// Função para limpar o formulario
const limparformulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verifica se o CEP é valido

const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa numero informado com expressão regular
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep); // verifica tamanho do cep digitado e executa função de validação do cep eNumero

//função para preencher formulario
const preencherformulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//consumo da API da ViaCEP
const pesquisaCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //esperar
        const addres = await dados.json(); 

        if(adress.hasOwnProperty('erro'))
    }   
    
    
}