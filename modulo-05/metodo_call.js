let fer = {
    name : 'fernando j ' ,
    tel : 3562456245
}

let dan = {
    name : 'Daniel b' ,
    tel : 551641132032
}

function imprimir () {
    this.console = function () {
        console.log( this.name , this.tel ) ;
    }
}

imprimir.prototype.console.call(fer) ;