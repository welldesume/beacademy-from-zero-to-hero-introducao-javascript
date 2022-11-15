// Type Conversion

// Convertendo String para número e número para String

console.log('9' + 24)
console.log( Number(9) + 24)
console.log(typeof String (9) + ' Converteu diacho!!')//typeof é para identificar se é String ou outro tipo de dado
console.log(String(9) +   '  beleza')

console.log("--------------------------------------------")

//Contar caracteres

let oneWord = "Moacir"
console.log(oneWord.length)//length é tamanho

console.log("--------------------------------------------")

//maiúsculas e minúsculas

let phrase = "Olha o bonde da Paylivre uauuuuuuuuuuu"
console.log(phrase.toUpperCase())//fica tudo maiúsculas
console.log(phrase.toLowerCase())//fica tudo mainusculas

console.log("--------------------------------------------")

//Converter para inteiro

let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

console.log("--------------------------------------------")

//Converter para decimal

let interNumber = 24
console.log(parseFloat(interNumber))

console.log("--------------------------------------------")

//Arredondar
let niceNumber = 24.98883422222234224
console.log(niceNumber.toFixed())

console.log("--------------------------------------------")

//especificar quantas casas decimais apareceram

let niceNumber2 = 24.9888358959422222234224
console.log(niceNumber.toFixed(2))


let niceNumber3 = 24.98883589534224
console.log(niceNumber.toFixed(4))

console.log("--------------------------------------------")

//modificar de ponto(.) para virgula(,)


let niceNumber4 = 24.98889999993589534224
console.log(niceNumber.toFixed(4).replace('.',','))

console.log("--------------------------------------------")

//precisão numérica

let otherNumber = 129/32
console.log(Number(otherNumber.toPrecision()))