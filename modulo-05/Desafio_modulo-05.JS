/*
DESAFIO MODULO 5

Vamos construir um divertido jogo de perguntas no console!
*/

/*
1 Construa um construtor de função chamado pergunta para descrever uma 
questão. 

    Uma pergunta deve incluir:

    a: Enunciado
    b: alternativas 
    c: resposta correta

*/
/*
4: Selecione uma pergunta aleatória e registre-a no console, junto com as 
possíveis respostas (cada pergunta deve ter um número) (dica: escreva um 
método para os objetos da pergunta para esta tarefa)
*/

/*
5: Use a função de prompt para solicitar ao usuário uma resposta correta. 
o usuário deve inserir o número da resposta correta, como você a exibiu 
na tarefa 4.
*/

/*
6: verifique se a resposta está correta e imprima para o console se a 
resposta está correta ou não (dica: escreva outro método para isso)
*/

/*
7: suponha que esse código seja um plugin para outros programadores usarem 
em seu código. Portanto, certifique-se de que todo o seu código seja privado 
e não interfira no código do outro programador (dica: aprendemos uma técnica
especial para fazer exatamente isso)
*/

/*
                        Nível de especialista
----------------------------------------------------------------------------
*/

/*
----------------------------------------------------------------------------
8: depois de exibir o resultado, exibir a próxima pergunta aleatória,
    para que o jogo nunca termine.
*/

// responsavel por pegar a entrada do navegador .
// retorna valor para uma variavel

/*
----------------------------------------------------------------------------
9: Tenha cuidado: depois da tarefa 8, o jogo literalmente nunca termina.
  Então incluide a opção de sair do jogo se o usuário escrever 'exit'
  ao invés da resposta. Neste caso, não chame a função da tarefa 8.
*/

/*
----------------------------------------------------------------------------
10: acompanhe a pontuação do usuário para tornar o jogo mais divertido!
  então cada vez que uma resposta estiver correta, adicione 1 ponto à
  partitura (dica: eu vou usar poder das closures para isso, mas você não
  precisa, apenas faça isso com as ferramentas que você se sente mais
  confortável neste momento ).
*/

/*----------------------------------------------------------------------------
  11 : Exiba a pontuação no console use ainda outro método para esse
*/

var APP_QUIZ = (function() {
  let window = window ;
  let document = document ;
  let Pergunta = function(enunciado, alternativa, resp) {
    this.resposta = resp;
    this.enunciado = enunciado;
    this.alternativas = alternativa;
  };

  Pergunta.prototype.set_resposta = function(num) {
    return (this.resposta = num);
  };

  Pergunta.prototype.get_resposta = function() {
    let result = this.resposta;
    console.log(result);
  };

  Pergunta.prototype.exibir_enuciado = function() {
    let enu = this.enunciado;
    return enu;
  };

  Pergunta.prototype.exibir_alternativa = function() {
    let msg = "";
    this.alternativas.forEach(function(item, indice) {
      msg += ` ${indice} : ${item} \n`;
    });
    return msg;
  };

  Pergunta.prototype.conferir_resposta = function(num) {
    return this.resposta == num;
  };

  //2: Crie algumas perguntas usando o construtor

  

  //3: armazene-os todos dentro de uma matriz
  let Questionario = function() {
    this.lista = [];
  };

  Questionario.prototype.sortear_pergunta = function() {
    let lista_perguntas = this.lista,
      total_perguntas = lista_perguntas.length + 1,
      num_lista = Math.floor(Math.random() * total_perguntas);

    return lista_perguntas[ num_lista ];
  };

  Questionario.prototype.add_pergunta = function(obj_pergunta) {
    this.lista.push(obj_pergunta);
  };

  Questionario.prototype.remove_pergunta = function(num) {
    let novoLista = this.lista.filter(function(e, indice) {
      return indice != num;
    });

    this.lista = null;
    this.lista = novoLista;
  };



  let Board_game = function ( nome_jogador ) {
    let round = 0 ;
    let score = 0 ;
  
    this.nome_jogador = nome_jogador ;
    this.incremento_score = function () { score++ } ;
    this.incremento_round = function () { round++ } ;
    this.get_score = function () {
        let value_score = score ;
        return value_score ;
    }
    this.get_round = function () {
        let number_round = round ;
        return number_round ;
    }
  };
  
  Board_game.prototype.proximo_round = function () {
    this.incremento_round()
  };
  
  Board_game.prototype.update_board = function ( id_score, id_round, id_player ) {
    let primeiro_acesso = true ;
    document.querySelector( id_score ).textContent = this.get_score() ;
    document.querySelector( id_round ).textContent = this.get_round() ;
    if(primeiro_acesso) document.querySelector( id_player ).textContent = this.nome_jogador ;
  };
  
  Board_game.prototype.fim_jogo = function ( value ) {
    this.score = 0 ;
    this.round = 0 ;
    this.nome_jogador = '' ;
  };
  
  Board_game.prototype.add_score = function () {
    this.incremento_score() ;
  } ;

  return {
    Pergunta: Pergunta ,
    Questionario: Questionario ,
    Board : Board_game ,
  };
})( window, document);



function main(){
  
  let broard = new APP_QUIZ.Board();
  let questionario = new APP_QUIZ.Questionario();
  
  let p1 = new APP_QUIZ.Pergunta("Quanto e 5 * 5 ?", [10, 21, 25], 2); // correto
  let p2 = new APP_QUIZ.Pergunta("Java e igual a javascript ?", ["sim", "nao"], 1);
  let p3 = new APP_QUIZ.Pergunta("Brasil se localiza em que continente", ["asia", 
    "europa", "america", "africa", "america do sul"], 4);

  questionario.add_pergunta( p1 );
  questionario.add_pergunta( p2 );
  questionario.add_pergunta( p3 );
  

  broard.update_board('#js_score' , '#js_round', null )
  console.log( questionario.sortear_pergunta() );
  


}

main();

