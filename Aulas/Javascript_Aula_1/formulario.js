const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiaro = document.getElementById('conta-deposito');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiaro.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiaro.value = '';
        valorDeposito.value = '';
    } else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);
    if(!formEValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})
