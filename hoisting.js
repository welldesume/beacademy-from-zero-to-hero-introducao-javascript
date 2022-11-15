

// hoisting
digaMinhaIdade()

function digaMinhaIdade(){
  return console.log(31)
}

/*com a declaração tradicional de uma função da forma acima acontece o hoisting a função passa para cima e troca de lugar surgindo primeiro e sendo execultada */ 
console.log("------------------------------------------")

// Callback Function
// disparar uma função dentro de outra função
function minhaFuncao(Callback){
  console.log('Inicio da minha função =)')

  Callback(15,15)
  console.log('Final da minha função')
}
minhaFuncao(
  function(num1,num2){
      return console.log(num1 + num2);
  }
)

console.log("------------------------------------------")
//Funções construtoras (Function Construct)

function Sum(){
  this.num3
  this.num4
  this.calc = function (num3, num4){
    return total = num3 + num4
  }
}
//para acessar o conteudo dessa função construtora vai se instanciar que é criar um novo objeto a partir de uma função

const math = new Sum()
console.log(math.calc(32,32))


const math2 = new Sum()
console.log(math2.calc(50,64))

//reaproveitou a função trocando apenas os valores.

const math3 = new Sum()
const num3 = math3.num3 = 24
const num4 = math3.num4 = 50
console.log(num3)
console.log(num4)
console.log(math3.calc(num3, num4))

const math1 = new Sum()
const number1 = math1.num3 = 30
const number2 = math1.num3 = 10
console.log(math1.calc(number1,number1)) 
console.log(math1.calc(number1,number2))
console.log(math1.calc(number2,number2))
console.log(math1.calc(number2,number1))
console.log(math1.calc(number2,number2,number1,number2))
console.log(math1.calc(number1,number1,number1,number1))
//obs só funciona oos dois primeiros números


function Sum(num5, num6){
  this.num5 = num5
  this.num6 = num6
  this.calc = function (num5, num6){
    return total = num5 + num6
  }
}

const math4 = new Sum()//pode ter parametro(40,20) da no mesmo
console.log(math4.calc(20,20))
console.log(math4.calc(40,45))
console.log(math4.calc(70,25))
console.log(math4.calc(20,80))
console.log(math4.calc(55,50))

// função nativa

const data = new Date();
console.log(data)

const data1 = new Date().getDay();
console.log(data1)

const data2 = new Date().getDate();
console.log(data2)

const data3 = new Date().getHours();
console.log(data3, "horas")