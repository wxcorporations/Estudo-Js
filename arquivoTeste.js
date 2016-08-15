var x = document.getElementById("btn");

function get_listaInputs(classe, callback) {
  //A CLASSE DEVE SER PASSADO COMO STRING
  var inputs = document.querySelectorAll(classe);
  var max = inputs.length;
  var funcExte = null;
  var lista = []
    , tmp = null
    , r = null;
  for (var i = 0; i < max; i++) {
    if (callback) {
      debugger;
      tmp = inputs[i].value;
      r = callback(tmp); // CALLBACK = (function par()) FUNCTION SO RETORNA UNDEFINED DEVERIA RETORNAR OS NUMEROS QUE SAO PAR PARA SER ARMAZENADO NO ARRAY LISTA;
      lista.push(r);
    }
    else {
      lista.push(inputs[i]);
    }
  }
  return console.dir(lista);
}

function par(numero) {
  var valor = Number(numero);
  var tmp;
  if (typeof (valor) == "number") {
    if ((valor % 2) == 0) {
      return console.log(valor);
    }
    else {
      return null;
    }
  }
}

function noneValue(item) {
  var tmp = item.value;
  if (tmp == "") {
    return tmp;
  }
}
get_listaInputs(".campos", par);