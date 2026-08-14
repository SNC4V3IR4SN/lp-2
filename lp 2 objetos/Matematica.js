class Matematica {
  static pi = 3.141592
 static soma(a,b) {
    return a + b
  }
 static divisao(a,b){
    return (b== 0)? 'nao divido por zero' :(a/b)// (b== 0)?  é a mesma coisa que if 
  }
}

var resultadoSoma = Matematica.divisao(1,3)
console.log(resultadoSoma)

function verificaSaldo(conta) {
  if(conta.saldo)
    return conta.saldo
  else return 'vc nao tem saldo'

  //return (conta.saldo || 'vc nn tem saldo') é a msm coisa 
}
