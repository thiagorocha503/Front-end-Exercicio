while (true) {
    var valor = prompt("Digite um número: ", "");
    if (valor != null) {
        valor = parseFloat(valor);
        if (!isNaN(valor)) {
            if (valor > 10) {
                alert("O número é maior 10!", "");
            } else if (valor < 10) {
                alert("O número é menor 10!", "");
            } else {
                alert("O número é igual a 10!", "");
            }
            break;
        } else {
            alert("Digite apenas números!", "");
        }
    } else {
        alert("Operação cancelada!", "");
        break;
    }

}