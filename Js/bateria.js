function sonido(src) {
	var audio = new Audio('audio/' + src + '.ogg');
	audio.play();
}

$(document).ready(function () {

	if ($(window).width() <= 850) {
		$('#platilloIzquierdo').click(function () {
			$("#platilloIzquierdo")
				.css("border-top", "1px solid gold")
				.css("border-radius", "50%")
				.animate({ opacity: 0.5, marginTop: "-20px" }, 100)
				.animate({ opacity: 1, marginTop: "0px" }, 100)
				.animate({ opacity: 1 }, 100)
				.animate({ marginTop: "0px" }, 100, function () {
					$(this).css("border-top", "");
				});
			sonido('platilloIzquierdo');
		});

		$('#platilloDerecho').click(function () {
			$("#platilloDerecho")
				.css("border-top", "1px solid gold")
				.css("border-radius", "50%")
				.animate({ opacity: 0.5, marginTop: "-20px" }, 100)
				.animate({ opacity: 1, marginTop: "0px" }, 100)
				.animate({ opacity: 1 }, 100)
				.animate({ marginTop: "0px" }, 100, function () {
					$(this).css("border-top", "");
				});
			sonido('platilloDerecho');
		});

		$('#cajaIzquierda').click(function () {
			$("#cajaIzquierda")
				.animate({ marginTop: "48px" }, 100)
				.animate({ marginTop: "60px" }, 100);
			sonido('cajas');
		});

		$('#cajaderecha').click(function () {
			$("#cajaderecha")
				.animate({ marginTop: "48px" }, 100)
				.animate({ marginTop: "60px" }, 100);
			sonido('cajas');
		});

		$('#tomBaseIzquierda').click(function () {
			$("#tomBaseIzquierda")
			$("#tomBaseIzquierda, #tomBaseDerecha").stop(true, true)
				.animate({ marginTop: "+8px" }, 100)
				.animate({ marginTop: "4px" }, 100)
			sonido('tomBase');
		});

		$('#tomBaseDerecha').click(function () {
			$("#tomBaseDerecha")
			$("#tomBaseIzquierda, #tomBaseDerecha").stop(true, true)
				.animate({ marginTop: "+8px" }, 100)
				.animate({ marginTop: "4px" }, 100)
			sonido('tomBase');
		});

		$('#pedal, #bajoUnico').click(function () {
			$("#pedal")
				.css({ position: "relative" })
				.animate({ marginTop: "-109px" }, 100)
				.animate({ marginTop: "-119px" }, 100)
			sonido('bajo');
		});
	}

	else {
		$(document).keydown(function (e) {

			if (e.key === "a" || e.key === "A") {
				$("#platilloIzquierdo")
					.animate({ opacity: 0.5, marginTop: "-20px" }, 100)
					.animate({ opacity: 1, marginTop: "0px" }, 100)
					.animate({ opacity: 1 }, 100)
					.animate({ marginTop: "0px" }, 100);
				sonido('platilloIzquierdo');
			} 
			else if (e.key === "w" || e.key === "W") {
				$("#platilloDerecho")
					.animate({ opacity: 0.5, marginTop: "-20px" }, 100)
					.animate({ opacity: 1, marginTop: "0px" }, 100)
					.addClass("bounceEffect")
					.animate({ opacity: 1 }, 100)
					.animate({ marginTop: "0px" }, 100);
				sonido('platilloDerecho');
			} 
			else if (e.key === "l" || e.key === "L") {
				$("#tomBaseIzquierda")
				$("#tomBaseIzquierda, #tomBaseDerecha").stop(true, true)
					.animate({ marginTop: "+28px" }, 100)
					.animate({ marginTop: "0px" }, 100)
					.animate({ width: '+=6px' }, 150)
					.animate({ width: '-=6px' }, 150);
				sonido('tomBase');
			}
			else if (e.key === "s" || e.key === "S") {
				$("#cajaIzquierda").animate({ marginTop: "-20px" }, 100)
					.animate({ marginTop: "0px" }, 100);
				sonido('cajas');
			} 
			else if (e.key === "h" || e.key === "H") {
				$("#cajaderecha").animate({ marginTop: "-20px" }, 100)
					.animate({ marginTop: "0px" }, 100);
				sonido('cajas');
			}
			else if (e.key === "v" || e.key === "V") {
				$("#tomBaseDerecha")
				$("#tomBaseIzquierda, #tomBaseDerecha").stop(true, true)
					.animate({ marginTop: "+28px" }, 100)
					.animate({ marginTop: "0px" }, 100)
					.animate({ width: '+=6px' }, 150)
					.animate({ width: '-=6px' }, 150);
				sonido('tomBase');
			}
			else if (e.key === "m" || e.key === "M") {
				$("#bajoUnico")
					.animate({ width: '+=-12px' }, 150)
					.animate({ width: '-=-12px' }, 150)
				sonido('bajo');
				$("#pedal")
					.css({ position: "relative" })
					.animate({ marginTop: "-30px" }, 100)
					.animate({ marginTop: "-60px" }, 100)
			}
			else{
				alert('En cada instrumento esta la letra aceptada')
			}
		});
	}

});