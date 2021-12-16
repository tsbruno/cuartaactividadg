/* const arreglo2 = Array.of(1, "hey", true); 
    console.log(arreglo2);  */


const arreglo1 = [4, 'hola', true, [1,2,3]]; 
    
    console.log(arreglo1); 

const arreglo2 = Array.of(1, "hey", true); 
    
    console.log(arreglo2);

const arreglo3 = new Array(3, true, "hey");
    
    console.log(arreglo3);

const frutas = ['kiwi', 'peras', 'uvas', 'melon', [1,2,3, ['A','B','C']]]; 
    
    console.log(frutas[1]); 
    console.log(frutas[3]); 
    console.log(frutas[4]);
    console.log(frutas[4][2]);
    console.log(frutas[4][3][1]);
    console.log(frutas);
    frutas[4][3].push('D'); 
    console.log(frutas); 


const letra = ['A', 'B', 'C', 'D']; 
    console.log (letra.length); 

letra.push ('E'); 
    console.log(letra); 


letra.pop();
    console.log(letra);

letra.unshift(1);
    console.log(letra); 

letra.shift();
    console.log(letra);










