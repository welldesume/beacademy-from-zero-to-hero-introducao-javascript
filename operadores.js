//Operadores Lógicos


console.log("Operadores Incremento e Decremento")
//Operadores Incremento e Decremento
// ++   --

let incrementNumber = 4
console.log(incrementNumber)
// +1
incrementNumber ++ //5
console.log(incrementNumber)
++incrementNumber //6
console.log(incrementNumber)
console.log("--------------------------------------------")
let decrementNumber = 50
console.log(decrementNumber)
decrementNumber -- //49
console.log(decrementNumber)
decrementNumber -- //48
console.log(decrementNumber)
decrementNumber -- //47
console.log(decrementNumber)
--decrementNumber //4
console.log(decrementNumber)

console.log("--------------------------------------------")
console.log("--------------------------------------------")
//Operadores Aritimeticos
//  +  -  /  *  %
let note1 = 10
let note2 = 7.5
let note3 = 5.5
let note4 = 3.5
let avg   = (note1+note2+note3+note4)/4
console.log(Number(avg.toFixed(2)))
//converter para número - toFixed define as casas decimais
console.log(Number(Math.round(avg)))
//Aredonda para cima
console.log(Number(Math.floor(avg)))
//Aredonda para baixo
console.log("--------------------------------------------")
console.log("--------------------------------------------")
//Operadores Relacionais e igualdade
//  <  >  ==    ===  !=   >=   <=

let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 
console.log(relation)
//!= Diferente no valor

console.log("--------------------------------------------")

relation = numberRelation1 !== numberRelation2 
console.log(relation)
//!== é diferente no valor ou no tipo?
//só no valor, mas com esta (ou), basta 1 ser dirente

console.log("--------------------------------------------")

relation = numberRelation1 == numberRelation2 
console.log(relation)
// para ver se é igual no valor

console.log("--------------------------------------------")

relation = numberRelation1 === numberRelation2 
console.log(relation)
// é igual no tipo (e) no valor ? 
// operador logico (e) tem de ser os dois verdadeiros 

console.log("--------------------------------------------")
console.log("--------------------------------------------")

// Operador de atribuição

let newNumberok = 20
newNumberok += 40//20+40=60
newNumberok *= 3//60*3=180
newNumberok -= 60//180-60=120
newNumberok /= 6//120/6=20
newNumberok %= 5//20%5=0

console.log(newNumberok)
//Obs o console.log printou apenas o ultimo console.log 

console.log("--------------------------------------------")
console.log("--------------------------------------------")

//Operadores Condicionais (Ternário)
//(condition) ? true  : false

let value = 24
let value2 = 32


const newCondition = value >= value2 ? 'Isso é verdade': 'Isso é uma mentira'
console.log(newCondition)

console.log("--------------------------------------------")

const newCondition2= value <= value2 ? 'Isso é verdade': 'Isso é uma mentira'
console.log(newCondition2)

console.log("--------------------------------------------")

const newCondition3= 
      value >= value2 ? 'Isso é verdade'
      : value <= value2 ?
      'Isso é verdade, segunda resposta true'
      : 'Resposta falsapara tudo!!'
console.log(newCondition3)

console.log("--------------------------------------------")

const newCondition4= 
      value >= value2 ? 'Isso é verdade'
      : value == value2 ?
      'Isso é verdade, segunda resposta true'
      : 'Resposta falsapara tudo!!'
console.log(newCondition4)
