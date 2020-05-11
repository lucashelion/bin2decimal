var appForm = document.querySelector("#app form");

//var potencias2 = [1, 2, 4, 8, 16, 32, 64, 128];

appForm.onsubmit = bin2Decimal;

function bin2Decimal(e){
	e.preventDefault();

	var input_bin = document.getElementById("input_bin").value;
	var result = document.getElementById("result");
	result.innerHTML = "";

	if(!validarInput(input_bin)) return;

	var numero_base2 = input_bin.split( '' ).reverse( ).join( '' );

	var numero_base10 = 0;

	for(var i=0; i<numero_base2.length; i++){
		if(numero_base2[i] == '1')
			numero_base10 += potencia2(i);
	}

	result.innerHTML = numero_base10;
}

function validarInput(input_bin){
	if(input_bin.length === 0) {
		alert("Por favor, preencha o número binário");
		return false;
	}
	if(input_bin.length > 16) {
		alert("Por favor, digite um número com até 16 dígitos");
		return false;
	}
	var bin_array = input_bin.split("");
	for(numero of bin_array){
		if(!(numero === '0' || numero === '1')){
			alert("Por favor, o número deve ser em base 2 (apenas 0s e 1s)");
			return false;
		}
	}

	return true;
}

function potencia2(n){
	if(n == 0) return 1;
	var resultado = 1;
	for(var i=0; i<n; i++){
		resultado *= 2;
	}
	return resultado;
}
