/*
 * Testo esercizio:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// Ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Creo una variabile per l'output (si resetta ad ogni ciclo)
    let output = "";

    // SE l'indice è divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        // ALLORA output: FizzBuzz
        output += `Number: ${i}; FizzBuzz`;
    }
    // ALTRIMENTI SE l'indice è divisibile per 3
    else if (i % 3 === 0) {
        // ALLORA output: Fizz
        output += `Number: ${i}; Fizz`;
    }
    // ALTRIMENTI SE l'indice è divisibile per 5
    else if (i % 5 === 0) {
        // ALLORA output: Buzz
        output += `Number: ${i}; Buzz`;
    } else {
        output += `Number: ${i}`;
    }

    console.log(output);
}
