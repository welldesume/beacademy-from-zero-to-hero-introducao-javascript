//IF AND ELSE
// SE E SE NÃO

let num = 10
let num2 = 20

//pode usar  <  >  ==  ===  !=  !==
if (num > 5) {
  console.log('Sou maior que 5')
} else {
  console.log('Não sou maior que 5')
}

console.log('-----------------------------------------')
// OPerador && (AND)
//pode usar  <  >  ==  ===  !=  !==
if (num >= 10 && num2 > 10) {
  console.log('Verdade')
} else {
  console.log('Falso')
}

console.log('-----------------------------------------')
// OPerador && (AND)
if (num > 10 && num2 > 10) {
  console.log('Verdade')
} else {
  console.log('Falso')
}

console.log('-----------------------------------------')
//Operador  || (OR)

if (num >= 10 || num2 < 10) {
  console.log('Verdade')
} else {
  console.log('Falso')
}

console.log('-----------------------------------------')
//Operador  || (OR)
if (num > 10 || num2 < 10) {
  console.log('Verdade')
} else {
  console.log('Falso')
}
console.log('-----------------------------------------')
// IF ELSE
if (num >= 10) {
  console.log('Sou maior !!')
} else if (num >= 10 && num2 <= 20) {
  console.log('Segunda resposta verdade')
} else {
  console.log('Resposta falsa')
}

console.log('-----------------------------------------')
// IF ELSE
if (num > 10) {
  console.log('Sou maior !!')
} else if (num < 10 && num2 == 20) {
  console.log('Segunda resposta verdade')
} else {
  console.log('Resposta falsa!!')
}

console.log('-----------------------------------------')
// ! (NOT)
let isAdminin = true // isAdiminin = ele eixste

if (!isAdminin) {
  console.log('Ele não é adimin')
} else {
  console.log('Ele é adimin, tem permissão')
}

console.log('-----------------------------------------')

// ! (NOT)
let isAdmininok = false // isAdiminin = ele eixste

if (!isAdmininok) {
  console.log('Verdade')
} else {
  console.log('Falso')
}

console.log('-----------------------------------------')

let isAdmins = true

if (isAdmins) {
  console.log('Ele é adimins, tem permissão')
} else {
  console.log('Ele não é admins')
}

console.log('-----------------------------------------')
console.log('-----------------------------------------')
//Agora vamos usar o Switch

let myExpression = 'c'

switch(myExpression){
      case 'a':
        console.log('Apertou o A')
        break
      case 'b':
        console.log('Apertou o B')
        break
      case 'c':
        console.log('Apertou o C')
        break  
      default:
        console.log('VocÊ apertou outra tecla', myExpression)
        break    
}

console.log('-----------------------------------------')

//Calculdora

function calc (num1, operador, num2){
  let result

  switch(operador){
      case "+":
        result = num1 + num2
        break
      case "-":
        result = num1 - num2
        break
      case "*":
        result = num1 * num2
        break
      case "/":
        result = num1 / num2
        break  
      default:
        console.log('Não entendi') 
        break   
  }
  return result
}
console.log(calc(4, '*', 4))
console.log(calc(8, '/', 2))
console.log(calc(12, '%', 12))
console.log(calc(4, '-', 3))
console.log(calc(4, '+', 4))

console.log('-----------------------------------------')
console.log('-----------------------------------------')



