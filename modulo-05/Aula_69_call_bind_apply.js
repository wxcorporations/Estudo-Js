/*
    EMPRESTIMO DE METODOS , MUDANÇA DE REFENCIA

MODULO : 5 AULA   : 69

METODOS SAO :   CALL , BIND , APPLY  
    -ESTES METODOS SAO HERDADOS DO OBJECT VIA PROTOTYPE

FINALIDADE 
    - ALTERAR A REFERENCIA DE UM OBJETO POSSIBILITANDO 
    - IMPRESTAR UM METODO SEM QUE TENHA QUE HERDALO 

--------------------- CALL ------------------------
    
    UTILIZANDO O METODO CALL

    - O PRIMEIRO PARAMETRO E O OBJETO QUE IREMOS PASSAR COMO REFERENCIA DO THIS 
    - OS DEMAIS PARAMETROS CORRESPONDE AOS PARAMETROS DO METODO [ apresentacao ] do objeto fernando .

    SINTAXE:
        fernando.apresentacao.call( daniel , daniel.job ) 
*/

// EXEMPLO
let fernando = {
    name : "fernando" ,
    job : 'developer' ,

    apresentacao : function ( job ) {
        console.log("Meu nome é ",this.name, 'e trabalho de ' ,job );
    }
}

let daniel = {
    name : 'daniel' ,
    job : "Soldado na Policia do exercito "
}

console.log('\n Exemplo do metodo CALL \n -------------------------------------');
fernando.apresentacao.call( daniel , daniel.job ) 


/* --------------------- APPLY ------------------------

    APPLY FUNCIONA QUASE DA MESMA FORMA QUE O METODO CALL, SÓ MUDA 
    SUA SINTAXE INVES DE RECEBER DIVERSOS PARAMETROS SO RECEBE UM 
    ARREY COM OS VALORES DOS ARGUMENTOS DO METODO IMPRESTADO

*/

console.log('\n Exemplo do metodo APPLY \n -------------------------------------');
fernando.apresentacao.apply( daniel , [ daniel.job ] ) 




/*--------------------- BIND ------------------------

    UTILIDADE DESSE METODO
        CRIAR SUBMETODOS MAIS AMIGAVEIS APARTIR DE UM METODO COM 
        DIVERSOS PARAMETOS

    - BIND RETORNA UMA FUNCAO E ARMAZENA VALOR DO PARAMETRO 
    PASSADO INTERNAMENTE

    - POSSUI UMA SEMELHANÇA COM CURRING

    - DECOPOR METODOS EM SUBMETODOS

*/

//SINTAXE

let trabalho2 = "Mecanico" ;
let daniel_trabalha = fernando.apresentacao.bind( daniel ) ;

console.log('\n Exemplo do metodo BIND \n -------------------------------------');

daniel_trabalha(daniel.job) ;
daniel_trabalha( trabalho2 ) ;
