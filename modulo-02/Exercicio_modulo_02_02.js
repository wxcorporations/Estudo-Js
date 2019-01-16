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

let Time = function( _nome ){
    let pontos = [];

    return {
        nome : _nome ,
        lista_pontos : function () {
            return pontos ;
        },
        add_pontos : function ( valor ) {
            pontos.push( valor );
        },
        calcular_media_pontos : function () {
            let lista = this.lista_pontos() ;
            return ( lista.reduce( (acumulador, proximo)=> ( acumulador + proximo ) ) ) / lista.length;
        }
    }
}

function gerar_pontos (){
    return Math.floor( Math.random() * 100 ) ;
}

function campeonato ( _total_partidas , lista_participantes ) {
    let time_jhon = new Time(),
        time_mark = new Time(),
        total_partidas = _total_partidas ,
        campeao = undefined ,
        lista_medias = [];

    while( total_partidas-- ){
        lista_participantes.forEach( function (time) {
            time.add_pontos( gerar_pontos() )
        })
    }

    campeao = lista_participantes.sort( function ( a , b ) {
        return a.calcular_media_pontos() - b.calcular_media_pontos()
    });

    console.log( `time campeao da rodada é` , campeao[ campeao.length -1 ].nome ) ;
}

let sao_paulo = new Time('sao_paulo') ;
let gremio = new Time('gremio');
let palmeiras = new Time('palmeiras');
let times = [ sao_paulo , gremio, palmeiras ];


campeonato( 5 , times) ;
// console.log('sao paulo',sao_paulo.calcular_media_pontos()) ;
// console.log('gremio' , gremio.calcular_media_pontos());
// console.log('palmeiras' , palmeiras.calcular_media_pontos());





