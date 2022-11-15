## O que é uma função no Javascript?

Uma função JavaScript é um bloco de código projetado para execultar uma tarefa especifica.
Uma função JavaScript é execulada quando "algo" a invoca (chama).
Uma função JavaScript é definida com a palavra - function chave, seguida por um name, seguido por parênteses ().
Os nomes das funcões podem conter letras, digtos, sublinhados e cifrões (mesmas regras das variáveis).
Os parênteses podem incluir nomes de parâmetros separados por virgulas:
(parâmetro1, parâmetro2, ... ).
O código a ser execultado, pea função, é colocado entre chaves: {}.

# Documentação: httpls://www.w3schools.com/js/js_functions.asp

# Anatomia Function

function myFunction (){
  //My code
}

# Anatomia Function Anonymous

const myFunction = function(){
  // My Code
}

# Execulção

myFunction ()
# Parâmetros da função

function myFunctionParameters(parameter1, parameter2){
  //My code
}

# argumentos na execulção


































































# Arrow Function, maneira mais moderna de criar uma função

# Exemplo

const arrowFunction = () -> {
  console.log('Arrow Function')
}

arrowFunction ()

# Exemplo com parâmetros e retorno

const arrowFunction = (num1 , num2) -> {
  total = num1 + num2
  return total
}

const result = arrowFunction(90, 20)
console.log(result)
















