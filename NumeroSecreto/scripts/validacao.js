function verificaSeOValorEValido(chute) {
    const numero = +chute // converter para um n´mero inteiro

    if(chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
            <h2>Game Over</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
        } else {
            elementoChute.innerHTML += '<div>valor inválido</div>'
            return
        }
    }

    if (numeroMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        recognition.stop()
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})