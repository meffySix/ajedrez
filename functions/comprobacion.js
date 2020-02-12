
function comprobarGanador(t, f, c) { 
    // comprobar si hay ficha con la N
    function comprobarN(t) {
        return (t[f][c][0] == "N");
    }
    // comprobar si hay ficha con la B
    function comprobarB(t) {
        return (t[f][c][0] == "B");
    }
    for (var f = 0; f < 8; f++) {
        for (var c = 0; c < 8; c++) {
        comprobarN(t);
        comprobarB(t);
        }
    }
    var B = "Blancas";
    var N = "Negras";
    // si no quedan fichas de una letra, gana el del otro color
    if (!comprobarN(t)) {
        return B;
    } else if (!comprobarB(t)) {
        return N;
    } else {
        return 0;
    }
}

module.exports = {
    comprobarGanador
}