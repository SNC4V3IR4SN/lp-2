 export class pessoa {
  constructor(nome, email, telefone) {
    this.nome = nome
    this.email = email
    this.telefone = telefone

   
}

 descricao() {
    return "Olá, meu nome é " + this.nome 
  }

}


var gabriel = new pessoa ('Gabriel', 'voce@gmail.com', '67999')




console.log(gabriel.descricao())