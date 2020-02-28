function calcular(valor1, valor2, operacao) {
    if (isFull(valor1, valor2, operacao)) {
        a = parseFloat(valor1), b = parseFloat(valor2);
        if (!isNaN(a) && !isNaN(b)) {
            switch (operacao) {
                case "+":
                    alert(somar(a, b), "");
                    break;
                case "-":
                    alert(subtrair(a, b), "");
                    break;
                case "*":
                    alert(multiplicar(a, b), "");
                    break;
                case "/":
                    alert(dividir(a, b), "");
                    break;
            }
        } else {
            alert("Insira apenas números");
        }

    } else {
        alert("Preencha todos os campos!", "");
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;

}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return "Erro: Divisão por zero!";
    }
}

function isFull(valor1, valor2, operacao) {
    if (valor1.length > 0 && valor2.length > 0 && operacao != " ") {
        return true;
    } else {
        return false;
    }

}