// Questão 1)
function verificarPrimo(numero) {

    // o menor numero primo existente é 2, logo se ele for menor ele nao é primo
    if (numero < 2) {
        return console.log('esse numero nao é primo')
    }

    // esse loop vai dividir o valor do numero e verificar se tem resto igual a 0, caso seja igual a 0 ele nao sera um numero primo. O loop vai parar quando i for menor que o numero.
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return console.log('esse numero é primo')
        }
    }

    console.log('esse numero é primo')
}

// Questão 2)
function verificarSenha(senha) {
    // verifica se tem letra maiuscula
    let temMaiuscula = /[A-Z]/.test(senha)
    // verifica se tem letra minuscula
    let temMinuscula = /[a-z]/.test(senha)
    // verifica se tem algum numero
    let temNumero = /[1-9]/.test(senha)

    // if so sera verdade se todos os requisitos forem cumpridos.
    if (senha.length >= 8 && temMaiuscula && temMinuscula && temNumero) {
        return console.log('sua senha é válida')
    } else {
        // caso nao seja atendido os requisitos sera exibido essa mensagem
        return console.log('sua senha nao é valida')
    }
}

// Questão 3)
function fatorial(numero) {
    // se o parametro inserido for 0 ou 1 vai retornar 1 pois o fatorial deles é 1.
    if (numero === 0 || numero === 1) {
        return 1
    } else {
        let resultado = 1
        // vai multiplicar de 2 ate chegar no numero e parar o loop.
        for (var i = 2; i <= numero; i++) {
            resultado *= i
        }
        return resultado
    }
}

// Questão 4) 
function verificarQuadradoPerfeito(numero) {
    // numeros negativos nao sao quadrados perfeitos
    if (numero < 0) {
        return console.log('nao é um quadrado perfeito')
    }

    let raiz = Math.sqrt(numero)
    if (raiz % 1 === 0) {
        return console.log('é um quadrado perfeito')
    } else {
        return console.log('nao é um quadrado perfeito')
    }
}
