// Aquí tienes los enunciados para que practiques los bucles while, do-while y for en JavaScript:

// Bucle While:

    // Enunciado: Escribe un programa que muestre los números del 1 al 5 utilizando un bucle while.
    let i = 1;
    while (i <= 5){
        console.log(i);
        i++;
    }

    // Enunciado: Crea un programa que solicite al usuario un número positivo y luego muestre todos los números impares desde 1 hasta ese 
    // número utilizando un bucle while.
    const numero = parseInt(prompt("Indica un numero positivo: "))
    let a = 1;
    let impares = [];
    while (a<=numero){
        if (a%2!==0){
            impares.push(a);
        }
        a++
    }
    alert(`Los numeros impares de ${numero} son: ${impares}`)


// Bucle Do-While:

    // Enunciado: Implementa un programa que solicite al usuario que adivine un número secreto (por ejemplo, 7) utilizando un bucle do-while. 
    // El programa debe continuar pidiendo adivinar el número hasta que el usuario adivine correctamente.
    let contador = 0;
    const number = 7;
    let intentos = 3;

    function imprimirIntentos(){
        alert (`Intentos: ${contador}. Le quedan: ${intentos-contador}`)
    }

    do{
        entradaNumero = parseInt(prompt("Adivina el número del 1 al 10: "))
        contador++;
        imprimirIntentos();
        if (contador === 3){
            break;
        }

    } while(number!==entradaNumero);

    if(contador>=3){
        alert(`Losiento ha perdido`)
    } else if (entradaNumero===number){
        alert(`Felicidades el número correcto es el: ${number}`)
        
    }

    // Enunciado: Escribe un programa que solicite al usuario ingresar una contraseña y continúe pidiendo la contraseña hasta que coincida con una contraseña predefinida utilizando un bucle do-while.

    const password = 1000;
    let intentosEntrada = 0;

    do{
        entradaPassword = parseInt(prompt("Ingresa la contraseña:"))
        intentosEntrada++;
        if(intentosEntrada ===3){
            alert ("Has excedido los intentos")
            break;
        }
    } while(password!=entradaPassword)
    
// Bucle For:

    // Enunciado: Crea un programa que muestre los números pares del 2 al 10 utilizando un bucle for.
for (let numero = 2; numero<=10; numero++){
    if (numero % 2 === 0){
        console.log(numero)
    }
}
    // Enunciado: Escribe un programa que calcule la suma de los números del 1 al 100 utilizando un bucle for.
    let suma = 0;
    for (let j = 1; j<= 100; j++ ){
        suma = suma + j
        
    }
    console.log(`${suma}`);