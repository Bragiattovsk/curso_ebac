const form = document.getElementById('form-contato');
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nomes.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else{
        nomes.push(inputNomeContato.value);
        numeros.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato = '';
    inputTelefoneContato = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}