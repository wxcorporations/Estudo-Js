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

let Board_game = function ( nome_jogador ) {
    this.round = 0 ;
    this.score = 0 ;
    this.nome_jogador = nome_jogador ;
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
    this.round++ ;
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
    this.score++ ;
} ;


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

//----------------------------------------------------------------------------
// 11. Exiba a pontuação no console use ainda outro método para esse