it('nada agora', function() { })

// const soma = function(a, b){
//     return a+b;
// }

// const soma = (a,b) => {
//     return a+b;
//}

const soma = (a,b) => a+b;

console.log(soma(3,1))

it('a function test...', function(){
  console.log('function', this)
})

it('a function test...', ()=>{
  console.log('Arrow', this)
})


it('a function test...', ()=>{
  console.log('Arrow', this)
})