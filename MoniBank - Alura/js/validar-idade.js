export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value)
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade') //definir uma mensagem de erro personalizada para um campo de formulário
    }
}

function validaIdade(data) {
    const dataAtual = new Date () // quando não passa nada dentro dos aprentesses ele pega a data atual
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()); // varifica quando a pessoa fez 18 anos 
    return dataAtual >= dataMais18
}