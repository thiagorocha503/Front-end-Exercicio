var valor1 = prompt("Digite o primeiro valor: ","");
if (valor1 != null){
	var operador
	var valor2 = prompt("Digite o segundo valor: ","");
	if(valor2 != null){
		resultado = parseFloat(valor1) + parseFloat(valor2)
		alert("Resultado: " +resultado );
	}else {
		alert("Operação cancelada!","")
	}
} else {
	alert("Operação cancelada!","")
}