function plus() {
	$("#result").empty();	// empty it if full
	var x = parseInt($("#x").val());
	var y = parseInt($("#y").val());

	if(!isValid(x,y)){
		return;
	}

	var result=x + y;
	var textResult=$("#x").val() + ' plus ' + $("#y").val() + ' is ' + result.toString();
	$("#result").append(textResult);
	
}

function minus() {
	$("#result").empty();	// empty it if full
	var x = parseInt($("#x").val());
	var y = parseInt($("#y").val());

	if(!isValid(x,y)){
		return;
	}


	var result=x - y;
	var textResult=$("#x").val() + ' minus ' + $("#y").val() + ' is ' + result.toString();
	$("#result").append(textResult);
	
}

function isValid(x,y) {

	if(isNaN(x) || isNaN(y)) {
		$("#result").append("Invalid input please try again");
		return false;
	}
	else 
		return true;



}