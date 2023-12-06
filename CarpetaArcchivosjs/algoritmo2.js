//Union listas

lista = [['A','B','C'],['D','E'],['E','F','G','H']]

function unirListas(lista) {
  return [].concat(...lista);
}
var listaUnida = unirListas(lista);

console.log(listaUnida);