/*
Jhon e Mike jogam basquete em equipes diferentes.
Nos últimos 3 jogos, o time de John marcou 89, 120 e 123 pontos.
*/

/*
1: Calcule a pontuação média de cada equipe
*/
/*
2: Decida quais equipes ganham em média (maior pontuação média)
e imprima o vencedor para o console. Inclua também a pontuação
média na saída.
*/
/*
3: Em seguida, altere as pontuações para mostrar os vencedores
diferentes. Não se esqueça de levar em conta que pode haver um
empate (a mesma pontuação média)
*/
/*
4: EXTRA: Mary também joga basquete e sua equipe tem 97, 134 e 105
pontos. Como antes, registre o vencedor médio para tomar a decisão.
 Se você não consegue resolver isso, apenas observe a solução, não
 tem problema
*/
/*
5: Como antes, altere as pontuações para gerar vencedores diferentes,
tendo em mente que pode haver empates
*/



let Time = ( function () {

    function calcular_media_pontos (lista) {
        return lista.reduce( function (acumulador, proximo){ return (  acumulador + proximo ) / lista.length } )
    }

    let Time = function( _nome ){
        let nome = _nome ,
            dados = {
                pontos : [],
                media : undefined
            } ;

        this.get_nome = function () {
            return nome ;
        }
        this.lista_pontos = function () {
            return dados.pontos ;
        }
        this.registrar_pontos = function (){
            dados.pontos.push( Math.floor( Math.random() * 100 ) );
        }
        this.get_media_pontos = function () {
            return calcular_media_pontos( dados.pontos ) ;
        }
    }

    return {
        novo_time : function( nome){
            return new Time(nome) ;
        }
    }
})()

let Campeonato = (function () {





    let Campeonato = function ( _nome , _total_jogos) {
        let nome = _nome ,
            total_jogos = _total_jogos ,
            dados = {
                id : 0 ,
                jogos : [ ],
                times_participante : [] ,
                campeao : undefined
            };

        function vencedor_campeonato ( ) {
            let lista_ordenada =  dados.times_participante.sort( ( a , b ) => a.get_media_pontos() - b.get_media_pontos() ) ;
            return lista_ordenada[ lista_ordenada.length - 1 ];
        }
        function gerar_numero_partida (num){
            num++ ;
        }
        function vencedor_partida ( t1 , t2 ){
            return t1.media_pontos > t2.media_pontos ? t1.nome : t2.nome ;
        }
        let registrar_time = function ( time ) {
            let registrado = dados.times_participante.some( ( time_da_lista )=> time_da_lista === time );

            if( !registrado ){
                dados.times_participante.push( time );
            }
        }
        this.exibir_times_participantes = function () {
            return dados.times_participante ;
        }
        this.nova_partida = function ( time1 , time2 ) {

            registrar_time( time1 );
            registrar_time( time2 ) ;

            let partida = {
                t1 : time1 ,
                t2 : time2 ,
                vencedor : vencedor_partida( time1 , time2 ) ,
                numero_partida : gerar_numero_partida(dados.id)
            } ;

            dados.jogos.push( partida ) ;
        }
        this.fim_campeonato = function () {
            vencedor_campeonato() ;
        }
        this.get_campeao = function ( ) {
            return dados.campeao ;
        }

    }

    return {
        novo_campeonato : function (_nome , _total_jogos ) { return new Campeonato( arguments )}
    }
})()





let main = ( function ( _time , _camp ) {

    let sao_paulo = new _time.novo_time( 'sao_paulo' );
    let flamengo = new _time.novo_time( 'flamengo' );
    let gremio = _time.novo_time( 'gremio' );
    let ponte_preta = _time.novo_time( 'gremio' );
    let times_participantes = [ sao_paulo , flamengo , gremio , ponte_preta ] ;
    let campeonato_paulista = _camp.novo_campeonato('Brasileiro' , 5 );

    function sorteio_times( arr) {
        let t1 = 0 , t2 = 0 ;
        while ( t1 === t2 ) {
            t1 =  arr[ Math.floor( Math.random() * arr.length ) ] ,
                t2 =  arr[ Math.floor( Math.random() * arr.length ) ]
        }
        return  {
            time1 : t1 ,
            time2 : t2
        }
    }

    function realizar_jogos_campeonato ( total_jogos ) {
        while (total_jogos){
            var sorteados = sorteio_times( times_participantes );
            campeonato_paulista.nova_partida( sorteados.time1 , sorteados.time2 ) ;

            console.log(
                sorteados.time1.registrar_pontos() , "\n" ,
                sorteados.time2.registrar_pontos()
            )
            total_jogos--
        }
    }

    function init_program () {
        realizar_jogos_campeonato( campeonato_paulista );
        campeonato_paulista.fim_campeonato();
        console.log(campeonato_paulista.get_campeao());
        console.log(campeonato_paulista.exibir_times_participantes())
    }

    return {
        init : init_program
    }
})( Time , Campeonato) ;


main.init();


