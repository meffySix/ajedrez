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

// POSIBLES MOVIMIENTOS ALFIL
// SE PUEDE MOVER TODO LO QUE QUIERA EN CUALQUIER DIAGONAL MIENTRAS ESTÉ VACÍO
// SI HAY UNA FICHA ENEMIGA, SOLO PUEDE LLEGAR HASTA AHÍ
function pMA(f, c) {
    var pM;
    if (t[f + 1][c + 1] === 0) {         // si la casilla superior derecha está vacía...
        pM.push[f + 1, c + 1];
    }

    if (t[f + 1][c - 1] === 0) {         // si la casilla superior izquierda está vacía...
        pM.push[f + 1, c - 1];
    }

    if (t[f + 1][c + 1][0] === "N") {    // si la casilla superior derecha tiene una ficha enemiga... 
        pM.push[f + 1, c + 1];
    }

    if (t[f + 1][c - 1][0] === "N") {    // si la casilla superior izquierda tiene una ficha enemiga...
        pM.push[f + 1, c - 1];
    }

    if (t[f - 1][c + 1] === 0) {         // si la casilla inferior derecha está vacía...
        pM.push[f - 1, c + 1];
    }

    if (t[f - 1][c - 1] === 0) {         // si la casilla inferior izquierda está vacía...
        pM.push[f - 1, c - 1];
    }

    if (t[f - 1][c + 1][0] === "N") {    // si la casilla inferior derecha tiene una ficha enemiga...
        pM.push[f - 1, c + 1];
    }

    if (t[f - 1][c - 1][0] === "N") {    // si la casilla inferior izquierda tiene una ficha enemiga...
        pM.push[f - 1, c - 1];
    }
}

// POSIBLES MOVIMIENTOS REY
// SOLO SE PUEDE MOVER UNO EN CUALQUIER DIRECCIÓN
function pMR(f, c) {
    var pM;

    if (t[f + 1][c + 1] === 0 || t[f + 1][c + 1][0] === "N") {  // si la casilla superior derecha está vacía o tiene una ficha enemiga...
        pM.push[f + 1, c + 1];
    }

    if (t[f + 1][c - 1] === 0 || t[f + 1][c - 1][0] === "N") {  // si la casilla superior izquierda está vacía o tiene una ficha enemiga...
        pM.push[f + 1, c - 1];
    }
            
    if (t[f - 1][c + 1] === 0 || t[f - 1][c + 1][0] === "N") {  // si la casilla inferior derecha está vacía o tiene una ficha enemiga...
        pM.push[f - 1, c + 1];
    }
        
    if (t[f - 1][c - 1] === 0 || t[f - 1][c - 1][0] === "N") {  // si la casilla inferior izquierda está vacía o tiene una ficha enemiga...
        pM.push[f - 1, c - 1];
    }

    if (t[f + 1][c] === 0 || t[f + 1][c][0] === "N") {  // si la casilla superior está vacía o tiene una ficha enemiga...
        pM.push[f + 1, c];
    }

    if (t[f - 1][c] === 0 || t[f - 1][c][0] === "N") {  // si la casilla inferior está vacía o tiene una ficha enemiga...
        pM.push[f - 1, c];
    }
            
    if (t[f][c + 1] === 0 || t[f][c + 1][0] === "N") {  // si la casilla derecha está vacía o tiene una ficha enemiga...
        pM.push[f, c + 1];
    }
        
    if (t[f][c - 1] === 0 || t[f][c - 1][0] === "N") {  // si la casilla izquierda está vacía o tiene una ficha enemiga...
        pM.push[f, c - 1];
    }
}