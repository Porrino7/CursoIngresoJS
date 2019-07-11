function mostrar()
{
//tomo la edad  
    var edad;
    
    edad=document.getElementById("edad").value;

    if( edad >= 13 && edad <= 17 ){
        alert("usted es adolocente");
    }
    else{
        if( edad < 13){

            alert("usted es menor");       

        }
        else{
          alert("usted es mayor");  
        }
            
    }

}//FIN DE LA FUNCIÓN