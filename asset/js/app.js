$(document).ready(function(){
	var count = 1;
	
	$('.photo').hide(); // cuando se carga el documento , las fotos permaneces ocultas
	$('.photo:first').show(); //solo la primera se puede se pone de un color diferente que corresponde a la primera foto
	$('.right').click(next); //al hacer click en la flecha derecha se ejecuta la funcion next
	$('.left').click(back); //al hacer click en la flecha izquierda se ejecuta la funcion back
	$('.fa-circle').click(pagination);// al hacer click en un icono circulo se ejecuta la función pagination.
 
  
	/*setInterval(function(){
		next();
	}, 5000);*/  // esta función si queremos que las imagenes se muestren por si solas.

	function pagination(){ //función cuando hacemos click en los circulos
		var circle = $(this).index() + 1; //index me devuelve la posición de mi elemento clickeado y le sumamos 1 ya que empieza de 0
		$('.photo').hide(); //escondemos todas las fotos
		$('#img'+ circle).fadeIn(500); //hacemos aparecer la fotos en la posición que clickeamos 

		$('.fa-circle').css({'color': '#5A5757'}); //todos los circulos son plomos
		$(this).css({'color': '#C56363'}); //el circulo clickeado en particulas cambia de color.

	}


	function next(){
		if( count >= 4){ //esto es para que se vayan repitiendo una y otra vez las fotos, nunca se va a pasar de la cantidas de fotos
			count = 1; //son 4 fotos , empieza con count=1 , por lo que es menor a 4 si que suma 1 y queda en count=2
		}     //en algun momento va ser igual a count=4 si que la función dice que cuando esto suceda debe volver a 1.
		else { //esta flecha solo puede ir en orden de posición de las fotos una tras otra, por eso se necesita otra función para los ...
			count++;//puntos ya que estos se pueden seleccionar en cualquier orden
		}

		$('.photo').hide(); 
		$('#img'+ count).fadeIn(500); //ocupamos fadeIn ya que hace que un elemento aparezca de estar en hiden a travez de la opacidad

		$('.fa-circle').css({'color': '#5A5757'}); // cuando se hace click en la flecha todos los circulos son plomos
		$('#circ'+ count).css({'color': '#C56363'});//pero el circulo clickeado es de otro color.
		
	}

	function back(){ // lo mismo que con el next pero restando para ir en retroceso con las fotos.
		if( count <= 1){
			count = 4;
		} 
		else {
			count--;
		}

		$('.photo').hide(); 
		$('#img'+ count).fadeIn(500); 

		$('.fa-circle').css({'color': '#5A5757'});
		$('#circ'+ count).css({'color': '#C56363'});
	}

	

});