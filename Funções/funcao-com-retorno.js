// verificar se uma pessoa e maior de idade

function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaiorIdade(20);
console.log(valorRetornadoPelaFuncao);
