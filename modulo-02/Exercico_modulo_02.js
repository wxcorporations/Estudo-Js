/*
Mark e John estão tentando comparar o índice de massa corporal do IMC,
que é calculado usando a fórmula: massa em kg e altura em metro.
*/
/*
1: marca de armazenamento e massa john e altura em variáveis
*/
/*
2: Calcular ambos os IMCs
*/
/*
3: Crie uma variável booleana que contenha informações sobre se a marca
tem um IMC mais alto que John.
*/

/*
4 Imprima uma string para o console que contém a variável da etapa 3.
(algo como "O IMC de Mark é maior que o de John? True."
*/

let Pessoa = function (nome, peso , altura_cm) {
    this.nome = nome ;
    this.peso = peso ;
    this.altura = altura_cm ;
};

Pessoa.prototype.calcular_imc = function () {
     return this.peso / ( this.altura ^ 2 );
};

function comparar_imc ( pessoa1 , pessoa2 ) {
    let value = pessoa1.calcular_imc() > pessoa2.calcular_imc() ;
    return `O IMC de ${ pessoa1.nome } é maior que o de ${ pessoa2.nome }? ${ value }.` ;
}

let mark = new Pessoa( 'Mark' , 95 , 1.74 ) ;
let jhon = new Pessoa( 'Jhon' , 100 , 1.80 ) ;

console.log( mark.calcular_imc() );
console.log( jhon.calcular_imc() );
console.log( comparar_imc( mark , jhon ) );