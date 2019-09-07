function addition(a, b) {
	return a + b;
}

function subtraction() {
	return a - b;
}

function multplication(a, b) {
	return a * b;
}

function division(a, b) {
	return a/b;
}

function calculadora() {
	var valor1 = parseFloat(prompt("Digite: ",""));
	var operador = null;
	while(true) {
		operador = prompt("operação: ","");
		if (operador == "+" || operador == "-" || operador == "*" || operador == "/" || operador === null){
			break;
		}
	}
	var valor2 = parseFloat(prompt("Digite: ",""));
	switch(operador){
		case "+":
			alert("resultado: " + addition(valor1, valor2));
			break;
		case "-":
			alert("Resultado: " + subtraction(valor1, valor2));
			break;
		case "*":
			alert("Resultado: " + multplication(valor1, valor2));
			break;
		case "/":
			alert("Resultado: " + division(valor1, valor2));
			break;
	}
	
}

//variáveis globais
numero1 = "";
operador = "";
numero2 = "";

function clickBtn(n){
	if (operador === ""){
	temp = n.toString();
	numero1 = numero1 + temp;
	tela = document.getElementById("visor");
	tela.innerHTML = numero1;			
	//alert("Botão " + n +"clicado!","");
	} else if(numero2 === ""){
	temp = n.toString();
	numero2 = numero2 + temp;
	tela = document.getElementById("visor");
	tela.innerHTML = numero1;
	}
}

function clickOperador(n){
	if (n.toString != "="){
		operador = n.toString();
		alert("operador: "+operador);
	}
}

//alert("script vinculado",");