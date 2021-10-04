//#Ejercicio #3
//Dada una lista de palabras y una palabra compuesta meta,-
//tu objetivo es encontrar las dos palabras que combinadas forman la palabra meta,-
//devolviendo ambas palabras en el mismo orden-
//en que aparecen en la lista, y sus respectivos índices en el orden en que deben combinarse para formar la palabra meta. 
//Las palabras en la lista que se recibe pueden repetirse, 
//pero solo habrá un par único conforma la palabra meta. 
//Si no hay palabras en la lista que conformen la palabra meta, puedes devolver null.


function fn(words, target) {
    for (let i = 0; i < words.length; i++) {    
        for (let ii = 0; ii < words.length; ii++) {
        const a1 = words[i] + words[ii] === target
        const a2 = words[ii] + words[i] === target        
        if (i !== ii && (a1 || a2)) {
            const arr = a1 ? [i, ii] : [ii, i]
            return [words[i], words[ii], arr]
        }
        }    
    }    
        return null
    }
    console.log(fn(['super','bow','bowl','tar','get','book','let'], "superbowl"));
    



