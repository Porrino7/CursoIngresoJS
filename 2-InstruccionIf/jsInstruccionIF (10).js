function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	
	nota=Math.floor(Math.random()*(11 - 1) + 1 );

		if(nota >= 9 ){

			alert("exelente " + nota);
		}
			else{

			 
				if(nota >= 4 && nota <= 8){
					alert("aprobado " + nota);
			}
				else
					alert("vamos la proxima , se puede " + nota);
		}

}//FIN DE LA FUNCIÓN