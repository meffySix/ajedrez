
function comprobarGanador(t, f, c) { 
    // comprobar si hay alguna ficha con N
    function comprobarN(t) {
        return (t[f][c][0] == "N");
    }
    // comprobar si hay alguna ficha con B
    function comprobarB(t) {
        return (t[f][c][0] == "B");
    }
    // si no quedan fichas de una letra, gana el del otro color
    for (var f = 0; f < 8; f++) {
        for (var c = 0; c < 8; c++) {
        comprobarN(t);
        comprobarB(t);
        }
    }
    if (!comprobarN(t)) {
        return "Blancas";
    } else if (!comprobarB(t)) {
        return "Negras";
    } else {
        return 0;
    }
}

module.exports = {
    comprobarGanador
}