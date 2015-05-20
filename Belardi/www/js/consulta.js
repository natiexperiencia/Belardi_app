$(document).ready(function() {
	
	$('input[name=radio]').change(function(event) {
		if (this.value == "productos") {
			$("#consultaProductos").css({
				visibility:'visible',
				display:'block'
			});
			$("#logo").css({
				visibility: 'hidden',
				display: 'none'
			});
			$("#consultarUsuarios").css({
				visibility: 'hidden',
				display: 'none'
			});
		}else{
			$("#consultaProductos").css({
				visibility:'hidden',
				display:'none'
			});
			$("#logo").css({
				visibility: 'hidden',
				display: 'none'
			});
			$("#consultarUsuarios").css({
				visibility: 'visible',
				display: 'block'
			});
		}
	});//change radio

	$('input[name=radioUsuario]').change(function(event) {
		if (this.value == "todos") {
			$("#nombreUsuario").css({
				visibility: 'hidden',
				display: 'none'
			});
			$(".labelNombreUsuario").css({
				visibility: 'hidden',
				display: 'none'
			});
			$("#submitUnUsuario").css({
				visibility: 'hidden',
				display: 'none'
			});
			$("#submitTodosUsuarios").css({
				visibility: 'visible',
				display: 'block'
			});
		}else{
			$("#nombreUsuario").css({
				visibility: 'visible',
				display: 'block'
			});
			$(".labelNombreUsuario").css({
				visibility: 'visible',
				display: 'block'
			});
			$("#submitUnUsuario").css({
				visibility: 'visible',
				display: 'block'
			});
			$("#submitTodosUsuarios").css({
				visibility: 'hidden',
				display: 'none'
			});
		}
	});//Change radioUsuario
});//Ready