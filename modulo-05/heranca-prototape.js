// link de resumo sobre assunto
// https://www.evernote.com/shard/s436/sh/f1b5fed9-51c2-4f75-a502-9d4e6087486f/6e61f270578fe7e0e6a3b90600f68b75

let Automovel = function (modelo , ano) {  // CONSTRUTOR
    let privado = undefined ;   // PROPRIEDADE PRIVADA
    this.modelo =  modelo ;  // PROPRIEDADE PUBLICA
    this.ano =  ano ;

} ;
Automovel.prototype.get_infor = function () {
    console.log( this.modelo , this.ano );
}

let Carro = function ( modelo , ano, placa  ) {
    Automovel.apply(this , arguments); // forma de passar parametos de Carro para o construtor pai Automovel
    this.placa = placa ;
    this.get_infor = function () {
        console.log( ` ${this.modelo} ${this.ano} `)
    }
} ;

Carro.prototype.get_infor_completas = function () {
    console.log( this.modelo , this.ano );

};

let uno = new Carro( 'uno mile' , 2006 , 'kbg1025'  ) ;
let jato = new Automovel( '----F15----' , 1995 );

uno.get_infor();
uno.get_infor_completas();

jato.get_infor();










