
// es5
// -------------------------------------------------
let Pessoa = function ( nome , sobrenome , ano_nas ) {
    this._nome = nome ;
    this._sobrenome = sobrenome ;
    this._data_nascimento = ano_nas ;

    this.metodo_pesso = function () {

    }
}

Pessoa.prototype.exibir_infor = function () {  // metodo registrado no prototype todas instancias iram herdalo .
    function calc_idade ( data ){
        let ano_atual = new Date().getFullYear();
        return ano_atual - data ;
    }
    console.log( 'Nome: ',this._nome, '\n Sobre-Nome: ', this._sobrenome, '\n Idade: ', calc_idade(this._data_nascimento ) )
}

// SUBCLASSE IRA HERDAR DA CLASSE PESSOA

let Atleta = function( nome , sobrenome, ano_nas,  _medalhas , _record){
    // A linha abaixo possibilita acessar o medoto construto de pessoa e passar paramentros de atleta ;
    Pessoa.apply(this , arguments ) ;
    this.medalhas = _medalhas ;
    this.record =_record ;
}

// Aqui estamos fazendo copia das propriedade internas e compartilhando os metodos de
// prototype para ATLETA
Atleta.prototype = new Pessoa();
Atleta.prototype.competir = function () {
    // aqui estou acessando propriedade [ _nome ] interna herdada da classe Pessoa .
    console.log(this._nome , 'Esta competindo!')
}

let boxeador_fernando = new Atleta('fernando ' , 'jose ' , 1910 , 35 , 3) ;
boxeador_fernando.exibir_infor();
boxeador_fernando.competir();




// es6
// -------------------------------------------------

class PessoaEs6 {
    constructor( nome , sobrenome , idade ){
        this.nome = nome ;
        this.sobrenome = sobrenome ;
        this.idade = idade ;
    }
    static apresentacao(){
        console.log('Seja bem vindo!');
    }
    exibir_nome(){
        return this.nome ;
    }
    exibir_sobrenome(){
        return this.sobrenome ;
    }

    get_infor(){
        return `${this.nome} -- ${this.sobrenome} -- ${this.idade}`
    }
}

class Atleta_es6 extends PessoaEs6{
    constructor( nome , sobrenome, idade ,medalha , record ){
        super( nome , sobrenome , idade );
        this.medalha = medalha ;
        this.record = record ;
    }
    exibir_medalhas_es6(){
        return this.medalha ;
    }
    exibir_record_es6(){
        return this.record;
    }

    competir () {
        return `${this.nome} , Esta competindo!`
    }

}

let daniel_es6 = new PessoaEs6('Daniel', 'barros' , 23,  )
console.log( daniel_es6.exibir_nome() )
console.log( daniel_es6.exibir_sobrenome() )
console.log(daniel_es6.get_infor());


let daniel_mergulhador = new Atleta_es6('Daniel_atleta' , 'barros' , 22 , 30 , 5);
console.log( daniel_mergulhador.exibir_nome() )
console.log( daniel_mergulhador.exibir_sobrenome() )
console.log(daniel_mergulhador.get_infor());
console.log( daniel_mergulhador.exibir_medalhas_es6() )
console.log( daniel_mergulhador.exibir_record_es6() )
console.log( daniel_mergulhador.competir() )



