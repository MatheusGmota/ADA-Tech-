const numero1 = 10
const numero2 = 30

const soma =  numero1 + numero2
const subtracao =  numero1 - numero2
const produto =  numero1 * numero2
const divisao =  numero1 / numero2
const potencia =  numero1 ** 2
const restoDivisao =  numero1 % numero2
console.log({soma});
console.log({subtracao});
console.log({produto});
console.log({divisao});
console.log({potencia});
console.log({restoDivisao});


// Soma com variavel undefined
let numero

const soma2 =  numero + numero2
console.log(soma2); // Resultado: NaN 


// Soma com null
const soma3 =  null + numero2
console.log(soma3); // Resultado: 30

// coerção/conversão implícita
const soma4 = numero2 - "ab"
// const soma4 = numero2 + "ab"
console.log(soma4); // Resultado: 30ab 


