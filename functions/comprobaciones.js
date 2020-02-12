
function comprobarGanador(tablero) { 
    // comprobar si hay alguna ficha con N
    function comprobarN(tablero) {
        return (t[f][c][0] == "N");
    }
    // comprobar si hay alguna ficha con B
    function comprobarB(tablero) {
        return (t[f][c][0] == "B");
    }
    // si no quedan fichas de una letra, gana el del otro color
    for (var fila = 0; fila < 8; fila++) {
        for (var columna = 0; columna < 8; columna++) {
        comprobarN(tablero);
        comprobarB(tablero);
        }
    }
    if (!comprobarN(tablero)) {
        return "Blancas";
    } else if (!comprobarB(tablero)) {
        return "Negras";
    } else {
        return 0;
    }
}

module.exports = {
    comprobarGanador
}