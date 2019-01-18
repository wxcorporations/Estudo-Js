// soluçao utilizada em es5
// por meio de calbacks e timer podemos ralizar funções assincrona .

function get_Receita() {
    setTimeout( ()=>{
        const id_receitas = [ 523 , 883, 432, 974 ];
        console.log( id_receitas );

        setTimeout(  id => {
            const receita = {titulo: 'Dry Martini', autor: 'fernando'};
            console.log(` ${id}: ${receita.titulo}`);

            setTimeout( autor => {
                const receita2 = {titulo: 'pizza doce', autor: 'fernando'};
                console.log('Autor :', receita.autor );
            }, 1500, receita.autor );

        }, 1500 , id_receitas[2] );

    }, 1500);
}

get_Receita();