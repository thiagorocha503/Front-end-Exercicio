function somar(a,b){
	return a + b;
}

function subtrair(a, b){
	return a - b;
}

function multiplicar(a, b){
	return a * b;
}

function dividir(){
	return a/b;
}


function calcular(a, b, operador){
	var resultado = 0;
	switch(operador){
		case "+":
			resultado = somar(a,b);
			break;
		case "-":
			resultado = subtrair(a, b);
			break;
		case "*":
			resultado = multiplicar(a,b);
			break;
		case "/":
			if(b !== 0){
				resultado = dividir(a,b);
			} else {
				alert("Erro: divisão por zero","");
				return "Erro";
			}
			break;
	}
	return resultado;  
}


var valor1 = prompt("Digite o primeiro valor: ","");
if (valor1 !== null){
	var operador = prompt("Digite o operdor: ","");
	if (operador !== null){
		var valor2 = prompt("Digite o segundo valor: ","");
		if (valor2 !== null){
			var a = parseFloat(valor1);
			var b = parseFloat(valor2);
			var resultado =  calcular(a, b, operador);
			alert("Resultado: "+resultado,"");
		}else {
			alert("Operação cancelada!","");
		}
	}else {
		alert("Operação cancelada!","");
	}
} else {
	alert("Operação cancelada!","");
}