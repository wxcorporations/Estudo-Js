let Gastos_controller = ( function () {
    let Gastos = function () {
        let total_gasto = 0 ;
        this.self = this ;

        this.lista_gastos = [];
        this.atualizar_total_gastos = function ( value ) {
            total_gasto = value ;
        };
        this.get_totalGasto = function () {
            let valor = total_gasto ;
            return  valor ;
        };
    };

    Gastos.prototype.novo_gasto = function ( descricao , valor , tag ) {
        let gasto = {
            descricao : descricao ,
            valor : valor ,
            tag : tag
        }
        this.self.lista_gastos.push( gasto ) ;
    };

    Gastos.prototype.somar_gasto = function () {
        let soma = 0 ;
        this.lista_gastos.forEach( function (item , index)
            {
                soma += item['valor'] ;
            }
        )
        this.atualizar_total_gastos( soma ) ;
    }

    return {
        Gastos : function () {
            return new Gastos();
        }
    };
})();


let newGasto = Gastos_controller.Gastos();

newGasto.novo_gasto('carro', 200 , 'transporte');
newGasto.novo_gasto('uber 10/05 ', 25 , 'transporte');
newGasto.novo_gasto('uber 10/05 ', 25 , 'transporte');
newGasto.novo_gasto('uber 10/05 ', 25 , 'transporte');
newGasto.novo_gasto('uber 10/05 ', 25 , 'transporte');
newGasto.somar_gasto();


console.log(newGasto.get_totalGasto());
