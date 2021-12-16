
function calcularDescueto(){

    let eValCompra = parseInt(prompt("Ingrese el valor")); 

        if(eValCompra < 100){
            return eValCompra * 0.90;
        }else if(eValCompra >= 100 && eValCompra <200){
            return eValCompra *0.80;
        }else{
            return eValCompra * 0.70;
        }


}


const descuento = calcularDescueto();
document.write("<h1> Elprecio con el desceunto es: " + descuento + "<h1>"); 







