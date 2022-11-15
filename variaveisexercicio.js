// 1. Declare uma variável de nome person 
//var person

// 2. Que tipo de dado é a variávela cima?
//console;log(typeof person)
//Resposta : undefined, pois só foi declarada e não foi dado valor.

/*3. DEclare uma variável e atribua valores para cada um dos dados

        * name: string
        * age: Number (integer)
        * weight: Number (float)
        * isAdmin: Boolean
        * isAMan: Boolean
*/
 let person = {
  name: "Moacir",
  age: 30,
  weight:69,
  isAdmin: false,
  isAMan: true
 }
 /*
    
    4. A varaiável human abaixo é de tipo de dados?
        Resposta: Object
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
    4.2 Mostre no console a seguinte mensagem, :
        o Humano <name> tem o peso <height> kg.

*/
let human = {
  name: "Moacir",
  age: 30,
  weight:69,
  isAdmin: false,
  isAMan: true
}
console.log(typeof human)
console.log(`O humano ${human.name} tem o peso ${human.weight} kg`);

/*

    5. Declare uma variável do tipo Array, de nome humans e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/ 
/*  6. Reatribua valor para a variável acima, colocando dentro dela o objetohuman da questão 4.(Não copiar e colocar o objeto, masusar o objeto criado inserir ele no Array)

*/


let humans = [
  human
]
console.log(humans)

/* 
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(humans[0].name)

/*
    8. Crie um novo objeto human e coloque na posição 1 do Array humans
*/

let newHuman = {
  name: "Luan Monteiro",
  age: 30,
  weight:90,
  isAdmin: true,
  isAMan: true
}
console.log(newHuman)

humans = [
  human, // 0
  newHuman // 1
]
console.log(humans)
console.log(humans[1])

//a) 
    console.log(a)
    var a = 1
    //resposta ?? undefined

   // b)
    let b 
    console.log(b)
    {
      let b = 2
      console.log(b)
    }
    console.log(b)
    //Resposta ?? undefined/2/undefined

    //c) 
    let c = 3
    console.log(c)
    {
      let c = 3
      console.log(c)
    }
    console.log(c)
    //Resposta ??
    //d) 
    const d = 10
    {
      console.log(d)
      const d = 20
      console.log(d)
    }
    // Resposta??*/erro const não mudar