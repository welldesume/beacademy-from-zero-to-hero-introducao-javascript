let tema

function criarTema(tema){
  return tema
}
console.log(criarTema(tema));

console.log("--------------------------------------------")

//Parte 2


let metodo = 'Pensar' // var = valor

function criarMetodo(metodo){
  return metodo
}
console.log(metodo); // resposta ==> 'pensar'
console.log(criarMetodo(metodo)); // resposta ==> 'pensar'

console.log("--------------------------------------------")

//Parte 3

let assunto = 'Estudar' // var = valor

function criarAssunto(assunto){
  assunto = "Escultar música"
  return assunto
}
console.log(assunto); // resposta ==> 'estudar'
console.log(criarAssunto(assunto)); // resposta ==> 'Escultar música'

console.log("--------------------------------------------") 

//Parte 4

let assuntook = 'EstudarOk' // var = valor

function criarAssuntook(){ //Sem parametro
  assuntook = "Escutar música ok"
 return assuntook
}
console.log(assuntook); // resposta ==> 'estudar'
console.log(criarAssuntook(assuntook)); // resposta ==> 'escutar musica ok'