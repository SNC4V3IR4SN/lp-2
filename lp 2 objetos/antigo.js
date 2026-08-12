function Fruta(nome, cor, forma) {
  this.nome = nome
  this.cor = cor 
  this.forma = forma 
  
  this.descricao = function () {
    return "essa fruta se chama" + this.nome + "possui a cor" + this.cor 
  }
}


var uva= new Fruta('uva', 'roxa', 'redonda')
var pera = new Fruta('pera', 'verde', 'esquisita')

console.log(uva.descricao)
