// Exemplo1

         //Method
function myFristFunction(){
  // Entra meu código
  console.log("olhaaaaa a função !!!")
}
// Execulte
myFristFunction()

console.log("--------------------------------------------")

// Parametos e Argumentos
//number1= 32 e number2 = 24
function sum(nunber1, nunber2){
    console.log(nunber1 + nunber2)
}
sum(32, 24)
//função void( não tem retorno)

console.log("--------------------------------------------")

function myFristFunctionrstFunctionWithReturn(num1, num2){
    let total = num1 + num2
    return total
}

console.log(myFristFunctionrstFunctionWithReturn(20, 20))
//Função any (Retorna algo)

console.log("--------------------------------------------")

//Restaurante

function meuPratoDeComida(comida1, comida2, comida3, comida4){
    return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`
}

const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'bata frita')
console.log(prato)

// Arrow Function

console.log("--------------------------------------------")

const myFristArrowFunction = (number1, number2) => {
  let total = number1 + number2
  return total
}

const result = myFristArrowFunction (20,20)
console.log(result)

console.log("------------------------------------------")

// Função Anônima (sem nome) 

/*
(function () {
    console.log('PayLivre S2')
})() //esse ultimo parentese indica Autoexecução, execulta de imediato afunção

 Obs: comentei essa função para não ser obrigado a comentar todo o resto do código*/

 console.log("------------------------------------------")

setTimeout(function(){
  console.log('Voulevar 3 segundos para ser executado!')
},3000)//3segundos