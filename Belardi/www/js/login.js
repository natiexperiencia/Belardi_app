
$(document).ready(function() {


	$("#formulario").submit(function(event) {
		console.log("submit");
		event.preventDefault();

		var formData = $(this).serializeArray();

		$.ajax({
			url: '../php/login.php',
			type: 'POST',
			dataType: 'json',
			data: formData,	
		})
		.done(function(data) {
			alert("Log In OK");
			window.location.href="home.html";
		})
		.fail(function() {
			alert("Log In NO OK");
			console.log("error");
		})
		.always(function() {
			alert(data);
			console.log("complete");
		});
		
	});
});