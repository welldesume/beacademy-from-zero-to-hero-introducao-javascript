// For

// para realizar um for é preciso: inciar; ter uma condição; iteração.

// iterar valores
for (let i = 1; i<= 10; i++) {
  console.log(i);
}

console.log("--------------------------------------")

for (let i = 10; i>= 1; i--) {
  console.log(i);
}

console.log("--------------------------------------")

//break
for (let i = 1; i<= 10; i++) {
      if(i === 5){
        break
      }
  console.log(i);
}


console.log("--------------------------------------")

// continue
for (let i = 1; i<= 10; i++) {
  if(i === 5){
    continue
  }
console.log(i);
}

console.log("--------------------------------------")
console.log("--------------------------------------")

//WHILE (enquanto)

let interator = 1
while (interator <= 20){
      console.log(interator)
      //adicina um incremento 
      interator++
}

console.log("--------------------------------------")

// For of
//array
 
let number = [2,4,3,5,6]
for (num of number){
  console.log(num)
  //num mostra os itens da array
  if (num > 4){
    console.log(num)
  }
}

console.log("--------------------------------------")

for (num of number){
  if (num > 4){
    console.log(num)
    //mostra os numero maiores que 4
  }
  }

  console.log("--------------------------------------")
  
  let names = ['maria', 'pedro','joão','jenifer','luan']
  for(num of names){
    console.log(num)
  }
    
  console.log("--------------------------------------")

//for in

let animals = {
  name: 'leão',
  weigth: 200,
  age: 4
}

console.log("--------------------------------------")

for (item in animals){
  console.log(animals)
}
//tipo 1 para capturar todo o objeto

console.log("--------------------------------------")

for (item in animals){
  console.log(animals["name"])
}
//tipo 2 para capturar valoes de objeto em um For in

console.log("--------------------------------------")

for (item in animals){
  console.log(animals[item])
}
//tipo 3 mostra todos os valores dentro das propriedades

console.log("--------------------------------------")
console.log("--------------------------------------")

for (item in animals){
  console.log(animals.name)
}
//tipo 4 captura valores individuais das prppriedades de um objeto

console.log("--------------------------------------")

let arrayName =[
  'pri',
  'cat',
  'zet',
  'moa'
]
for (item in arrayName){
  console.log(arrayName)
  //mostra todo o array
}

console.log("--------------------------------------")

for (item in arrayName){
  console.log(arrayName[item])
  //mostra todo os valores
}

console.log("--------------------------------------")

for (item in arrayName){
  console.log(arrayName[2])
  //mostra diretamente um vetor
}

console.log("--------------------------------------")

for (item in arrayName){
  console.log(item)
  //index dos vetores, mostra todos os vetores(posições)
}