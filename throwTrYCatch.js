//Trrow and Try Catch

//Saber a minha idade

function myAge  (myage){
  if(!myage){
    throw 'Você precisa coloca a idade!'// throw = erro
  }
  console.log('Eu execultei depois do erro')
}
//try = tentar
try {
  myAge(30)
  console.log('Já tratei e deu certo!')
  //catch = capitura o erro
}catch(error) {
  console.log(error)
}


console.log("---------------------------------------")

//Sem colocar idade- 
try {
  myAge()
  console.log('Já tratei e deu certo!')
  
}catch(error) {
  console.log(error)
}

console.log('O programa continua')
//Apresenta o erro mas o codigo continua





