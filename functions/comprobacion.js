/**
 * Esta función comprueba si en el tablero hay un
 * jugador ganador.
 * 
 * Devuelve 1 ó 2 si ha ganado el jugador 1 o el 2,
 * respectivamente; 0 si no hay ganador.
 * 
 * @param {*} tablero 
 */

function comprobarGanador(t) { 
    
    reyBlanco = false;
    reyNegro = false;
    
    for (var fila = 1; fila < 8; fila++) {

        if (!reyBlanco && 'BR' in t[fila]) reyBlanco = true;
        if (!reyNegro && 'NR' in t[fila]) reyNegro = true;
    }
    
    switch(true) {

        case(reyBlanco && !reyNegro):
        
            return 'BLANCAS';

        case(reyNegro && !ReyBlanco):

            return 'NEGRAS';

        default:
        
        
    }
}

module.exports = {
    comprobarGanador
}