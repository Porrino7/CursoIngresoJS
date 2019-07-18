function mostrar()
{   
    
    var planeta;
    var mensaje;

    planeta=prompt("ingrese planeta");

    switch (planeta) {
        case "Tierra":
            alert("vivimos aca")
            
            break;
        
        case "Venus":
        case "Mercurio":
            alert("aca hace mas calor");

            break;
        
        case "Marte":
        case "Jupiter": 
        case"Urano":
        case "Saturno":
            
            alert("aca hace mas frio");
        
            break;
            default:
                
                alert("esto no es un planeta");
                
                break;
        
        
        
        
        }
    
       
    




}
