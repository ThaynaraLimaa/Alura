export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value)
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade') //definir uma mensagem de erro personalizada para um campo de formulário
    }
}

function validaIdade(dataDeNascimento) {
    const dataAtual = new Date () // quando não passa nada dentro dos aprentesses ele pega a data atual
    const dataMais18 = new Date(dataDeNascimento.getUTCFullYear() + 18, dataDeNascimento.getUTCMonth(), dataDeNascimento.getUTCDate()); // varifica quando a pessoa fez 18 anos 
    return dataAtual >= dataMais18
}