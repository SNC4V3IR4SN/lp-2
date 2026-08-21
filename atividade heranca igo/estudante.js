import { pessoa } from "./pessoa.js"

export class estudante extends pessoa {

  constructor(nome, email, telefone, ra) {
    super(nome, email, telefone )
    this.ra = ra
  
    }
  
     descricao = function () {
    return "Olá, meu nome é " + this.nome + "e meu ra é este" + this.ra

  }

}

var gabriel = new estudante('Gabriel', 'voce@gmail.com', '67999', "67676767")

console.log(gabriel.descricao())