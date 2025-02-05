const form = document.getElementById('form-comparacao');
const numeroMenor = document.getElementById('numero-menor');
const numeroMaior = document.getElementById('numero-maior');

function validaNumero(numeroMenor, numeroMaior){
    const compara = numeroMenor < numeroMaior;
    return compara
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    formEValido = validaNumero(numeroMenor.value, numeroMaior.value)
    if(formEValido){
        document.querySelector('.sucess-message').style.display = 'block';
    }else{
        document.querySelector('.error-message').style.display = 'block';
    }
})

numeroMenor.addEventListener('keyup',function(e){
    document.querySelector('.sucess-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';
})

numeroMaior.addEventListener('keyup',function(e){
    document.querySelector('.sucess-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';
})