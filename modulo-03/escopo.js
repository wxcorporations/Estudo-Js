/*
    HOISTING 

    - SOMENTE VAR POSSUI ESSE EFEITO.

    TODA VARIAVEL DECLARADA COM COM VAR ELA E RECEBE O EFEITO 
    HOISTINS OU IÇAMENTO, ONDE O INTERPRETADOR JAVASCRIPT IRA LER O SCRIPT 
    E DECLARA AS VARIAVEIS DECLARADAS COM A PALAVARA VAR PAR O INICIO DO
    CODIGO EM TEMPO DE EXECUCAO DE FORMA QUE ELA FIQUE ACESSIVEL PARA 
    QUALQUE PARTE DO CODIGO

*/

/*
    DIFERENÇA ENTRE VAR E LET

    LET
    ---------------------------------------------------------------
    - ESCOPO LOCAL
    - SO PODE SER UTLILIZADA APARTIR DO MOMENTO QUE FOR DECLARADA 
    - NAO POSSUI HOISTING 
    - NAO PERMITE DECLARACAO DE VARIAVEIS COM O MESMO NOMO NO CODIGO

    VAR
    ---------------------------------------------------------------
    - ESCOPO GLOBAL
    - PERMITE DECLARACO DE VARIAVEIS COM O MESMO NOME
    - POSSUI HOISTING
    - PERMITE SER UTILIZADA ANTES DA SUA DECLARACAO GRAÇAS AO HOISTING

    HOISTING
    ---------------------------------------------------------------
    NOME DADO AO COMPORTAMENTO DE VARIAVEIS DECLARADAS COM VAR
    TODAS AS VARIAVEIS DECLARADAS NO SCRIPT COM VAR SAO DECLARADAS NO INICIO 
    DO SCRIPT PELO INTERPRETADOR NO MOMENTO DA LEITURA POSSIBILITANTO 
    QUE VARIAVEIS DECLARADAS COM VAR NO FIM DO SCRIPT POSSA SER UTILIZADA NO 
    INICIO DO SCRIPT

    - PROBLEMA : CONFITOS POIS SAO VARIAVEIS DE ESCOPO GLOBAL O QUE 
    POSSIBILITA ALTERACAO DE VALOR DA MESMA SEM INTENCAO


*/


var variavel_global = "gobal" ;
var fernando_nome = 'fernando jose'  // sofre hoisting sera exibida na funcao teste

function teste(){
    let variavel_interna = 'interna' ;

    // erro de conflito pois tempos duas variaveis de escopo global como o mesmo nome
    console.log( variavel_global )  // retorno : undefined

    var variavel_global = 'troca de valor'

    console.log(variavel_global)

    // exibe nome normalmente graças ao hoisting 
    console.log( fernando_nome ) 

    // < gera o erro nome nao foi definido, ja que [ let ] nao possui hoisting 
    console.log( nome )  //  Erro : varaivel nao definida
}

teste()

console.log( variavel_interna ) //  gera o erro nome nao foi definido, ja que [ let ] possui escopo restrito ao container Function

var nome = "fernando"  // ira dar erro pois nao possui efeito hoisting
