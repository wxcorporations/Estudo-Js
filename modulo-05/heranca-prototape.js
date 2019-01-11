// link de resumo sobre assunto
// https://www.evernote.com/shard/s436/sh/f1b5fed9-51c2-4f75-a502-9d4e6087486f/6e61f270578fe7e0e6a3b90600f68b75

let Automovel = function (modelo , ano) {  // CONSTRUTOR
    let privado = undefined ;   // PROPRIEDADE PRIVADA
    this.modelo =  modelo ;  // PROPRIEDADE PUBLICA
    this.ano =  ano ;
    this.get_infor = function () {
        console.log( this.modelo , this.ano );
    }
} ;

let Automovel_licenciados = function ( placa , autorizacao ) {
    Automovel.apply( this. arguments ); // forma de passar parametos de Carro para o construtor pai Automovel

}


let Carro = function (modelo , ano , portas) {
    Automovel.apply(this , arguments); // forma de passar parametos de Carro para o construtor pai Automovel

    this.portas = portas ;
    this.get_infor = function () {
        console.log( ` ${this.modelo} ${this.ano} ${this.portas}` )
    }
} ;
Carro.prototype = new Automovel() ;






let jato = new Automovel( '----F15----' , 1995 );
console.log( jato.modelo );
console.log( jato.ano );
jato.get_infor();

let uno = new Carro('uno_mile' , 2006 , 4 ) ;
uno.get_infor() ;








