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
    // comprobar si hay ficha Rey Negra
    function comprobarNR(t) {
        return (t[f][c] == "NR");
    }
    // comprobar si hay ficha Rey Blanca
    function comprobarBR(t) {
        return (t[f][c] == "BR");
    }
    // comprobar si hay ficha Dama Negra
    function comprobarND(t) {
        return (t[f][c] == "ND")
    }
    // comrobar si hay ficha Dama Blanca
    function comprobarBD(t) {
        return (t[f][c] == "BD")
    }

    // recorrer todo el tablero en busca de esas piezas
    for (var f = 0; f < 8; f++) {
        for (var c = 0; c < 8; c++) {
        comprobarNR(t);
        comprobarBR(t);
        comprobarND(t);
        comprobarBD(t);
        }
    }
    
    // si no quedan ni R ni D de un color, gana el del otro color
    var B = "Blancas";
    var N = "Negras";
    if (!comprobarNR(t) && !comprobarND(t)) {
        return B;
    } else if (!comprobarBR(t) && comprobarBD(T)) {
        return N;
    } else {
        return 0;
    }
}

module.exports = {
    comprobarGanador
}