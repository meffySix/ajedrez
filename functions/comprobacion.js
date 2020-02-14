/**
 * Esta función comprueba si en el tablero hay un
 * jugador ganador.
 * 
 * Devuelve 1 ó 2 si ha ganado el jugador 1 o el 2,
 * respectivamente; 0 si no hay ganador.
 * 
 * @param {*} t 
 */

function comprobarGanador(t) { 
    
    ReyBlanco = false;
    ReyNegro = false;
    
    for (var fila = 0; fila < t.length; fila++) {

        if(t[fila].indexOf('BR') + 1) {

            console.log(typeof(t[fila]));
            
            ReyBlanco = true;

            if(ReyNegro) return 0;
        }

        if(t[fila].indexOf('NR') + 1) {
            
            ReyNegro = true;

            if(ReyBlanco) return 0;
        }
    }
        
    if(ReyBlanco) {

        if(ReyNegro) return 0;
    
        return 'BLANCAS'
    
    }
    
    return 'NEGRAS';

}

module.exports = {
    comprobarGanador
}