
// EM ES5
// -------------------------------
let Carro = function ( _modelo , _ano, _portas , _id) {
    // propriedades privadas e publicas
    //prop declarada com let var const dentro do construtor se torna privada
    //prop declarada this. sao publicas.
    let id = _id ;   // privado
    this.modelo = _modelo ;    // publico
    this.ano = _ano ;
    this.portas = _portas ;

    // metodo privado
    let calcular_idade = function ( ano ) {
        let ano_atual = new Date().getFullYear();
        return ano_atual - ano ;
    }

    // metodo publico
    this.get_id = function () {
        return id ;
    }
    this.infor = function () {
        return `id ${id} Modelo  ${this.modelo} Idade ${ calcular_idade(this.ano)}`
    }
}

let passat = new Carro('Passat', 1986 , 4 , 21);

console.log( passat.get_id() )
console.log( passat.infor() )
// EM ES6
// -------------------------------

class Carro2 {

    constructor ( modelo , ano , _num_portas , _id){
        // atributos publicos
        this.id = _id ;
        this.modelo = modelo ;
        this.ano = ano ;
        this.num_portas = _num_portas ;
    }

    infor(){
        let msg = `id ${this.id} Modelo ${ this.modelo} no ${ this.ano } ` ;
        return  msg ;
    }
}

let fusca = new Carro2('1400' , 1962 , 2 , 10);

console.log( fusca.infor() );
