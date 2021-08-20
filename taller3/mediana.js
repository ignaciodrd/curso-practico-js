function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length
    
    return promedioLista
};

function esPar(numerito) {
  if (numerito % 2 == 0) {
      return true;
  } else {
      return false;
  }
}

function mediana(lista){

  lista.sort((a, b) => a - b);
  const mitadLista = parseInt(lista.length / 2);

  // let median;
  if (esPar(lista.length)) {
      const elemento1  = lista[mitadLista - 1];
      const elemento2 = lista[mitadLista];

      const promedioElementos = calcularMediaAritmetica([
          elemento1,
          elemento2,
      ]);
      return promedioElementos;
  } else {
      return lista[mitadLista];
  };

}


// 
// 
// 
// 
// 
// 

// const lista1 = [
//     100, 
//     200,
//     500,
//     4000000,
// ];

// function calcularMediaAritmetica(lista){
    
//     const sumaLista = lista.reduce(
//         function (valorAcumulado = 0, nuevoElemento) {
//             return valorAcumulado + nuevoElemento;
//         }
//     );

//     const promedioLista = sumaLista / lista.length
    
//     return promedioLista
// };
// const mitadLista1 = parseInt(lista1.length / 2);

// function esPar(numerito) {
//     if (numerito % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;
// if (esPar(lista1.length)) {
//     const elemento1  = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElementos = calcularMediaAritmetica([
//         elemento1,
//         elemento2,
//     ]);
//     mediana = promedioElementos;
// } else {
//     mediana = lista1[mitadLista1];
// };