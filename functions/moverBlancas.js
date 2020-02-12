function esBlanca(ficha) {
    return (ficha.indexOf("B") == 0);
  }

// POSIBLES MOVIMIENTOS ALFIL
// SE PUEDE MOVER TODO LO QUE QUIERA EN CUALQUIER DIAGONAL MIENTRAS ESTÉ VACÍO
// SI HAY UNA FICHA ENEMIGA, SOLO PUEDE LLEGAR HASTA AHÍ
function pMAB(f, c) {
    var pM;
    if (t[f + 1][c + 1] === 0) {         // si la casilla superior derecha está vacía...
        do {
        pM.push[f + 1, c + 1];
        f++;
        c++;
        } while (t[f + 1][c + 1] === 0)
    }
    if (t[f + 1][c - 1] === 0) {        // si la casilla superior izquierda está vacía...
        do {
        pM.push[f + 1, c - 1];
        f++;
        c--;
        } while (t[f + 1, c - 1] === 0)
    }
    if (t[f + 1][c + 1][0] === "N") {    // si la casilla superior derecha tiene una ficha enemiga... 
        pM.push[f + 1, c + 1];
    }
    if (t[f + 1][c - 1][0] === "N") {    // si la casilla superior izquierda tiene una ficha enemiga...
        pM.push[f + 1, c - 1];
    }
    if (t[f - 1][c + 1] === 0) {        // si la casilla inferior derecha está vacía...
        do {
        pM.push[f - 1, c + 1];
        f--;
        c++;
        } while (t[f - 1, c + 1] === 0)
    }
    if (t[f - 1][c - 1] === 0) {       // si la casilla inferior izquierda está vacía...
        do {
        pM.push[f - 1, c - 1];
        f--;
        c--;
        } while (t[f - 1, c - 1] === 0)
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
function pMRB(f, c) {
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

// POSIBLES MOVIMIENTOS DAMA
// MOVIMIENTOS DE LA TORRE Y EL ALFIL
function pMDB(f, c) {
    var pM;
    // MOVIMIENTOS ALFIL PARA DAMA
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
    // MOVIMIENTOS TORRE PARA DAMA
}