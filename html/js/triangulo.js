function tipoTriangulo(valor1, valor2, valor3) {
    var divResultado = document.getElementById("resultado");
    if (valor1.length != 0 && valor2.length != 0 && valor3.length != 0) {
        var a = parseFloat(valor1);
        var b = parseFloat(valor2);
        var c = parseFloat(valor3);
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            if (leiDeExistencia(a, b, c)) {
                if (a == b && b == c && c == a) {
                    tipo = "Equilátero";
                } else if ((a == b) || (b == c) || (c == a)) {
                    tipo = "Isósceles";
                } else {
                    tipo = "Escaleno";
                }
                divResultado.innerHTML = tipo;
            } else {
                alert("Os números informados não formam um triângulo!", "");
            }
        } else {
            alert("Insira apenas números!", "");
        }
    } else {
        alert("Preencha todos os campos", "");
    }

}


function leiDeExistencia(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}