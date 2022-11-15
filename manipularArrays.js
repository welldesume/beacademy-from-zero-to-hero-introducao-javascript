//Manipulando String e Arrays
/* 
Separando um texto que contem espaços, em um novo array onde
cada texto é uma posição do array.
*/

let newPhrase = " Fala meus queridos e queridas"
console.log(newPhrase)

console.log("------------------------------------------")

let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

console.log("------------------------------------------")

let phraseToArray2 = newPhrase.split('')
console.log(phraseToArray2)
//Transformou um texto em um array. split(' ') separa por palavras e split('') separa por letra.

console.log("------------------------------------------")

let phraseModify = phraseToArray.join(" ")
console.log(phraseModify)
//transformou de volta para  texto.

console.log("------------------------------------------")

let phraseModify2 = phraseToArray.join(" ").toLowerCase()
console.log(phraseModify2)
//agora alem de transformar deixou todos minusculos

console.log("----------------------------------------------")

//verificar se contém letras ou palavrs usando (includes)
//só funciona para array ou string

let stringInclude = "Vem ne mim Paylivre, pay pay "
console.log(stringInclude.includes("Paylivre"))
console.log(stringInclude.includes("PayLivre"))
console.log(stringInclude.includes(","))
console.log(stringInclude.includes("P"))
console.log(stringInclude.includes("L"))

console.log("----------------------------------------------")

//colocar dentro um objeto


let arrayInclude = [
"PayLivre",
"Veem",
"ne mim",
"Meu amor",
{
  firstName: "Pay",
  lastName: "Livre"
}
]
console.log(arrayInclude.includes("Pay"))//não encontrou
console.log(arrayInclude.includes("PayLivre"))

//não encontrou o Pay porque ele esta dentro de um objeto 

console.log("----------------------------------------------")

//String startWith - vai procurar string que comecem com (vc segere)
console.log(stringInclude.startsWith("Ve"))
//String endsWith - vai procurar o fim da palavra 
console.log(stringInclude.endsWith("im"))

console.log("----------------------------------------------")

//transfomar um Array em caracteres

let wordToArray = "Quem ta gostando diz Hey!!"
console.log(Array.from(wordToArray))

console.log("----------------------------------------------")

//Manipulando Arrays
const animals =["🐷", "🐶","🦓","🦒","🙉"]
console.log(animals)
//temos da posição 0 até 4 no array e 5 no length
//Adicinar item no fim do array
console.log(animals.push("🐢"))
console.log(animals)

console.log("----------------------------------------------")

//Adicinar item no inicio do array
console.log(animals.unshift("🐍"))
console.log(animals)

console.log("----------------------------------------------")

//Remover o ultimo item
console.log(animals.pop())
console.log(animals)

console.log("----------------------------------------------")

//Remover item do começo
console.log(animals.shift())
console.log(animals)

console.log("----------------------------------------------")

//pegar somente alguns elementos do array
//Não modificar o array
console.log(animals.slice(0,3))
console.log(animals)

console.log("----------------------------------------------")

//Remover um ou mais item do array
//console.log(animals.splice(1,3))//primeira opção
//ou assim
//animals.splice(1,3)//segunda opção
//console.log(animals)

console.log("----------------------------------------------")

//ocódigo a cima foi comentado para voltar ao ponto inicial
//Encontrar a posição do array
let index = animals.indexOf('🙉')
console.log(index)
//Remover apenas um item
animals.splice(index,4)
console.log(animals)