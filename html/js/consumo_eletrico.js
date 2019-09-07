function calculaConsumo(consumo, valorUnitario){	
	if (isFull(consumo,valorUnitario)){
		var consumo = parseFloat(consumo);
		var valorUnitario = parseFloat(valorUnitario);
		var valorTotal = 0;
		if(isNumber(consumo,valorUnitario)){
			if(consumo>0 && valorUnitario > 0){
				if (consumo > 0 && consumo <= 100){
					valorTotal = consumo * valorUnitario;
				} else if (consumo > 100 && consumo <= 200) {
					valorUnitario *= 1.25;// 
					valorTotal = consumo * valorUnitario;
				} else {
					valorUnitario *= 1.5;//
					valorTotal = consumo * valorUnitario;
				}
				alert("Valor a pagar: R$"+valorTotal,"");
			} else {
				alert("Insira penas números maiores que zero!");
			}
		}else {
			alert("Insira apenas números!","");
		}
	} else {
		alert("Preencha todos os campos!","");
	}
}


function isFull(a, b){
	if (a.length > 0 && b.length > 0) {
		return true;
	} else {
		return false;
	}
}

function isNumber(a,b){
	if (!isNaN(a) && !isNaN(b)) {
		return true;
	} else {
		return false;
	}


}

//alert(calculaConsumo(250,0.5));