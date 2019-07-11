function mostrar()
{
//tomo la edad  
    var edad;
    var estadocivil;

    edad=document.getElementById("edad").value;
    
    estadocivil=document.getElementById("estadoCivil").value;
    
     if(edad >= 18 && estadocivil == "Soltero" ){

        alert("usted no es menor y esta soltero")


    }

}//FIN DE LA FUNCIÓN