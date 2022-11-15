// Comentário em linha

/*
Comentário em bloco
*/

console.log('Olha eu no aspas simples!!')
console.log("Olha eu no aspas duplas!! ")
console.log("OLha eu no 'aspas' duplas/simples !!")
console.log('OLha eu no "aspas" simples/duplas !!')
console.log(`Ol'ha 'eu 
'na' "crase"
 onde tem 'mais'
  recursos !!`)
  /* Obs: se tiver muitos caracteres especiais é mais interensante a crase*/

  console.log("----------------------------------------")

  console.log(12) // Integer
  console.log(24.5) // Float
  console.log(12*24/4)// calc
  console.log(Infinity)
  console.log(50+(53*4.5))
  console.log(Math.round ((50+(53*4.5))))//metodo para aredondar

  console.log("----------------------------------------")

  //  boolean - (true / false)
  console.log(42 > 32)
  console.log(24 > 32)
  console.log(42 == 32)

  console.log("----------------------------------------")

  // teste null / indefido

  console.log(null === undefined)
  // null existe mais não tem valor nenhum
  // undefined não existe

  console.log("----------------------------------------")

  // construir um objeto
  // chaves {}significa que um obijeto
  //marca = propriedade 
  // fiat = valor
  console.log({
    marca: 'Fiat',
    largura: '550cm',
    peso: 1,
    velocidade: (90 * 200) * 2,
    andar: function(){
      console.log(`Sua velocidade é de 200`)
    },
    possuiAr: true
  })

  console.log("----------------------------------------")

  // Array
  //simbolo do array é []
  //indice=vetor=posição
  //começa do zero (0: "Bolacha"), (1:"Coca-cola")
  console.log(
    "Bolacha",//0
    "Coca-cola",//1
    "Verduras",//2
    "Água"//3
  )//4 itens



  
