function posiblesMovimientosPeon(ficha, origen, destino) {
// tiene que mostrar las casillas a las que se puede mover
// 1 o 2 filas arriba, misma columna
    // ficha = tablero[ficha][columna];
    // origen = req.body.form;
        // blancas
        destino = tablero[fila] -= 1 || 2;
        // negras 
        destino = tablero[fila] += 1 || 2;
}
function posibilidadesComerPeon(ficha, origen, destino) {
// tiene que mostrar las casillas a las que puede comer
// 1 en diagonal hacia delante
    // blancas
    tablero[fila] -= 1; tablero[columna] -= 1; tablero[columna] += 1;
    // negras
    tablero[fila] += 1; tablero[columna] -= 1; tablero[columna] += 1;
}

// DEBERÍA VALER PARA CUALQUIER FICHA Y PARA CUALQUIER MOVIVIENTO (ataques incluidos)
function moverFicha (ficha, destino) {
// tiene que mover la ficha a la casilla que selecciones de las disponibles
}

// una vez hecho el movimiento, actualizar el tablero.