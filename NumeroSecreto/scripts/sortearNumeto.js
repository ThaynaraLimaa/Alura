const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAluario()

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor


function gerarNumeroAluario() {
    return parseInt(Math.random() * (menorValor - maiorValor) + maiorValor + 1)
}

console.log(numeroSecreto)
