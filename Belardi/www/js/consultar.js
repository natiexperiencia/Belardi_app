$(document).ready(function() {
	$("#formularioConsulta").submit(function(event) {
		console.log("submit");
		event.preventDefault();
		var tipoConsulta = $("input[name=radio]:checked", "#formularioConsulta").val();
		if(tipoConsulta == "usuarios"){
			var formData = $(this).serializeArray();

			$.ajax({
				url: 'http://natiteka.zapto.org/php/consultaUsuarios.php',
				type: 'POST',
				dataType: 'json',
				data: formData,	
			})
			.done(function(data) {
						
			})
			.fail(function() {
				alert("Fallo");
				console.log("error");
			})
			.always(function() {
				alert(data);
				console.log("complete");
			});
		}else{
			var formData = $(this).serializeArray();

			$.ajax({
				url: 'http://natiteka.zapto.org/php/consultaProductos.php',
				type: 'POST',
				dataType: 'json',
				data: formData,	
			})
			.done(function(data) {
						
			})
			.fail(function() {
				alert("Fallo");
				console.log("error");
			})
			.always(function() {
				alert(data);
				console.log("complete");
			});
		}
	});
});//Ready