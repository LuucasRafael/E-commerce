class Endereco{
    constructor(Bairro,Uf,Logradouro,Numero,Complemento,Cidade){
        this.Bairro = Bairro;
        this.Uf = Uf;
        this.Complemento = Complemento;
        this.Logradouro = Logradouro;
        this.Numero = Numero;
        this.Cidade = Cidade
    }
}

module.exports = Endereco;