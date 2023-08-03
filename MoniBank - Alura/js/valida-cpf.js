export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, ""); // tira as caracteres especiais 
    //define o customError 
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse CPF não é válido.')
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf); // retorna true se os números for repitido
}


// valida o primeiro digito (depois do -) para validar se o cpf é válido. 
function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11; 

    if (soma == 10 || soma == 11) {
        soma = 0
    }

    return soma != cpf[9] // true se o cpf não existe
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11; 

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10] // true se o cpf não existe
}