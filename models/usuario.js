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

module.exports = Usuario;