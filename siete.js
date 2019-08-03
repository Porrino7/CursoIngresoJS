function mostrar()
{
    /*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
    var notas;
    var notabaja = 0;
    var notavaron = 0;
    var sexo = "";
    var promedio=0;
    var sexobajo= "";
    var notastotal = 0;

    

    for(contador = 0 ; contador<5 ; contador ++){
       
        notas=prompt("ingrese una nota ") ;
      
        notas=parseInt(notas);
        
        while(notas < 0 || notas > 10 || isNaN (notas)){
            
            notas=prompt("error.vuelva a ingresas una nota valida");
        
            notas=parseInt(notas);
       } notastotal = notas + notastotal;    
       sexo=prompt("ingrese sexo");
        //mientras se cumpla () voy a seguir repitiendo
        while(sexo != "f" && sexo != "m"){ 
        
            sexo=prompt("reingrese sexo ")
            
        }

        if(notas > notabaja){

        notabaja = notas;
        sexobajo = sexo;


        }
        if(notas >= 6 && sexo == "m"){

            notavaron++;
        }

    
        
       
       promedio++;     
    }
    promedio = notastotal / promedio;
    document.write("el promedio es "+ promedio + "<br>");
    document.write("nota mas baja es" + notas + " y el sexo es " + sexo + "<br>");
    document.write("la cantidad de masculinos aprobados" + notavaron +"<br>" );
    
}


/*
do{
//iNSTANCIA DE REPETICION
//UNA VEZ LO CUMPLE SI O SI
}while()//VALIDA QUE SEA TRUE PARA SEGUIR ITERANDO


//FOR
if( nota > 6 && sexo == m ){
                notavaron ++;    
            }
*/