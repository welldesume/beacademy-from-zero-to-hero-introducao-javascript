// Declarar

//var name
//let name2
//const name3
// const tem de ser inicilazada declarar algum valor

let name1 = "Luan"
console.log(name1)
name1 = 32
console.log(name1)
name1 = "Monteiro"
console.log(name1)
const name2 ="Luan"
console.log(name2)
//const name3 = "Monteiro" da erro no código
//console.log(name3)

console.log("------------------------")

// Globais


console.log('Variável name existe aqui?', name)

{//Scopo(bloco decódigo)
  //variável esta local
  var name = "Welligton"

}

console.log('Variável name existe aqui?', name)

/*foi feito um Hosting ele tirou a variável de dentro do Scopo isso por debaixo dos panos colocou a cima do Scopo e tranformou em variável Global. só a (var) tem essa função*/ 

console.log("----------------------------------------")

//Scopo
//Locais
let nome = "Davi"

{
   
console.log('Meu nome chegou aqui?', nome)

}
console.log('Meu nome chegou aqui?', nome)

console.log("---------------------------")
console.log("---------------------------")


let nomes = "Davi"
console.log('Meu nome chegou aqui? ' , nomes)
{
  let nomes = "Jenifer"
  console.log('Meu nome chegou aqui?' ,nomes)
}
console.log('Meu nome chegou aqui? ' , nomes)

//(let) e (const) precisam estadentro de um Scopo, esse exemp. funciona para let e const.

console.log("----------------------------------------")

//objetos

const human = {
  name: "Luan Monteiro",
  age: 30,
  weight: 90,
  isAthlete: true,
  walk: function walking(){
    console.log('Eu ando bastante!')
  }
}//objeto
/*console.log(human.age)
console.log(human.name)
console.log(human.isAthlete)
console.log(human.walk())*/

//concatenar
console.log("O homano " + human.name + " tem a idade "+ human.age)

// Interpolação

console.log(`O humano ${human.name} tem a idade ${human.age}`)

console.log("----------------------------------------")

//Array
const animals = [ 
"Elefante",//0
"Gato",//1
"Leão",//2
"Cachorro",//3
{
name:"Moacir",
age:2,
weight:4
}
]//tamanho 4
//console.log(animals.length)ver o tamanho do array
console.log(animals[0])
console.log(animals[2])
console.log(animals[4])
console.log(animals[4].name)
console.log(animals[4].age  , animals[4].weight)
console.log(`O nome do meu animal é ${animals[4].name} e sua idade é ${animals[4].age}`)
