$(document).ready(function() {
	$("#formularioConsulta").submit(function(event) {

		console.log("submit");
		event.preventDefault();
		var tipoConsulta = $("input[name=radio]:checked", "#formularioConsulta").val();
		var tipoConsultaUsuario = $("input[name=radioUsuario]:checked", "#formularioConsulta").val();

		if(tipoConsulta == "usuarios"){
			if (tipoConsultaUsuario == "todos") {
			var formData = $(this).serializeArray();
			var user;
				$.ajax({
					url: '../php/consultaUsuarios.php',
					type: 'POST',
					dataType: 'json',
					data: formData,	
				})
				.done(function(data) {
					console.log(data);
					$.each(data, function(index, value) {
						user = "<p>"+data[index].numero+", " + data[index].nombre + ", " + data[index].email + ", " + data[index].rol + "</p>";
						$('#resultadoConsulta').append("<table border='1' width='350'><tr><td>"+user+"</td></tr></table>");
						console.log(data);
					});
				

						//$('#resultadoConsulta').append("<p>"+data.numero+", " + data.nombre + ", " + data.email + ", " + data.rol + "</p>");
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
				var user;
				$.ajax({
					url: '../php/consultaUsuarios.php',
					type: 'POST',
					dataType: 'json',
					data: formData,	
				})
				.done(function(data) {
					console.log(data);
						user = "<p>"+data.numero+", " + data.nombre + ", " + data.email + ", " + data.rol + "</p>";
						$('#resultadoConsulta').html("<table border='1' width='350'><tr><td>"+user+"</td></tr></table>");
				})
				.fail(function() {
					alert("Fallo");
					console.log("error");
				})
				.always(function() {
					console.log("complete");
				});
			}
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