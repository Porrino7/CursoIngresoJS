/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var marca;
    var descuento;
    var preciocondescuento;
    var mensaje;


    cantidad=document.getElementById("Cantidad").value;
    cantidad=parseInt(cantidad);
    marca=document.getElementById("Marca").value;

    if(cantidad >= 6 ){

        descuento= 35 * 50 / 100 ;
        preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
        
        document.getElementById("precioDescuento").value=preciocondescuento
       

    

    }else
    if( cantidad == 5){
         
        switch (marca) {
            case "ArgentinaLuz":
                        descuento= 35 * 40 / 100 ;
                        preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
                        
                       
                break;
            
            default:

                        descuento= 35 * 30 / 100 ;
                        preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
                        
                        
                break;}
                
    } else if (cantidad == 4){
                
        switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento= 35 * 25 / 100 ;
                preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
                        
                        
                break;
            
            default:
                descuento= 35 * 20 / 100 ;
                preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
                        
                        
                break;}
            }
            
        else if (cantidad == 3 ){
            switch (marca) {
                case "ArgentinaLuz":
                    descuento= 35 * 15 / 100 ;
                    preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
                            
                          
                    break;
                case "FelipeLamparas":

                    descuento= 35 * 10 / 100 ;
                    preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
                        
                            o
                default:

                    descuento= 35 * 5 / 100 ;
                    preciocondescuento = (cantidad * 35 ) - descuento * cantidad;
                            
                           
                    break;}
            }

            document.getElementById("precioDescuento").value=preciocondescuento









        }


    
        




        
