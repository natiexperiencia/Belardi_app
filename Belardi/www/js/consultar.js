$(document).ready(function() {
	$("#formularioConsulta").submit(function(event) {
		console.log("submit");
		event.preventDefault();
		var tipoConsulta = $("input[name=radio]:checked", "#formularioConsulta").val();
		if(tipoConsulta == "usuarios"){
			var formData = $(this).serializeArray();

			$.ajax({
				url: '../php/consultaUsuarios.php',
				type: 'POST',
				dataType: 'json',
				data: formData,	
			})
			.done(function(data) {
				console.log(data);
					$('#resultadoConsulta').append("<p>"+data.numero+", " + data.nombre + ", " + data.email + ", " + data.rol + "</p>");
			})
			.fail(function() {
				alert("Fallo");
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		}else{
			var formData = $(this).serializeArray();

			$.ajax({
				url: '../php/consultaProductos.php',
				type: 'POST',
				dataType: 'json',
				data: formData,	
			})
			.done(function(data) {
				console.log(data);	
			})
			.fail(function() {
				alert("Fallo2");
				console.log("error");
			})
			.always(function() {
				alert(data);
				console.log("complete");
			});
		}
	});
});//Ready