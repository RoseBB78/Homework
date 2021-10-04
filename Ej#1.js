// Ejercicio #1
//Implementa una función la cual se comporta como el comando 'uniq-c' de Unix.
//Este comando toma por entrada una secuencia y devuelve otra secuencia en la cual todos los elementos duplicados
//de manera seguida han sido reducido a una única instancia junto con el número de ocurrencias en la secuencia original.

function uniqCount(...elements){
  //const {current, cnt} = elementCount
  let current = null;
  let cnt = 0;
  for (let i = 0; i < elements.length; i++) {
      if (elements[i] != current) {
          if (cnt > 0) {
              console.log(current + ' --> ' + cnt);
          }
          current = elements[i];
          cnt = 1;
      } else {
          cnt++;
      }
  }
}
uniqCount('a','a','a', 'b','b','c','a','b','c');
