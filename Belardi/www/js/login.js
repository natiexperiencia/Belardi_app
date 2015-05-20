
//<script type="text/javascript" src="js/index.js"></script>
//<script src="js/jquery-1.11.2.min.js"></script>
//<script type="text/javascript" src="js/jquery.animate-colors.js"></script>


$(document).ready(function() {


	$("#formulario").submit(function(event) {
		console.log("submit");
		event.preventDefault();

		var formData = $(this).serializeArray();

		$.ajax({
			url: 'http://natiteka.zapto.org/php/login.php',
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