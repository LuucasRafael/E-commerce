class Usuario{
    static nextId = 1;
    constructor(Nome,Email,Idade,Cpf,Telefone,Adm = false,UsuarioExterno = false,Colaborador = false){
        this.ID = Usuario.nextId++;
        this.Nome = Nome;
        this.Email = Email;
        this.Idade = Idade;
        this.Cpf = Cpf;
        this.Telefone = Telefone;
        this.Adm = Adm;
        this.UsuarioExterno = UsuarioExterno;
        this.Colaborador = Colaborador
    }
}

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

class Cliente extends Usuario{
    constructor(Apelido,NivelCliente){
        this.Apelido = Apelido;
        this.NivelCliente = NivelCliente
    }
}

module.exports = {Usuario,Endereco,Cliente};