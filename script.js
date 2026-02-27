const gerarMetodos = (obj, atributos) => {
    atributos.forEach(atr => {
        let Atr = atr.charAt(0).toUpperCase() + atr.slice(1); 

        obj[`get${Atr}`] = () => obj[atr];
        obj[`set${Atr}`] = (v) => obj[atr] = v;
        obj[`get${Atr}UpperCase`] = () => String(obj[atr]).toUpperCase();
        obj[`get${Atr}LowerCase`] = () => String(obj[atr]).toLowerCase();
    });
};

function TelefoneCelular(ddd, numero) {
    this.ddd = ddd; this.numero = numero;
    gerarMetodos(this, ['ddd', 'numero']); 
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado; this.cidade = cidade; this.rua = rua; this.numero = numero;
    gerarMetodos(this, ['estado', 'cidade', 'rua', 'numero']);
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome; this.telefoneCelular = telefoneCelular; this.email = email; this.endereco = endereco;
    gerarMetodos(this, ['nome', 'email']); 

    Object.defineProperty(this, 'descricao', {
        get: () => `Informações do Cliente:\n${this.nome}\n\nTelefone:\nDDD: ${this.telefoneCelular.ddd}\nNúmero: ${this.telefoneCelular.numero}\n\nEndereço:\nRua: ${this.endereco.rua}\nNúmero: ${this.endereco.numero}\nCidade: ${this.endereco.cidade}\nEstado: ${this.endereco.estado}\n`
    });
}

const ordenarClientes = (clientes) => [...clientes].sort((a, b) => a.nome.localeCompare(b.nome));

let telefone = new TelefoneCelular('11', '999999999');
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

console.log(cliente.descricao);

console.log("\nNome em maiúsculas:", cliente.getNomeUpperCase());
