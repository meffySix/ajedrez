var express = require('express');
var router = express.Router();

const tablero = [
  ["NT", "NC", "NA", "ND", "NR", "NA", "NC", "NT"],
  ["NP","NP", "NP", "NP", "NP", "NP", "NP", "NP"],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  ["BP","BP", "BP", "BP", "BP", "BP", "BP", "BP"],
  ["BT", "BC", "BA", "BR", "BD", "BA", "BC", "BT"]
];

var jugadores = 0;
var turno = 1;

// function tableroIJ (tablero, fila, columna) {

//   alert(tablero[fila][columna]);
// }

/* Pantalla principal del juego. */
router.get('/', function(req, res, next) {
  const session = req.session;
  if (!session.jugador) {
    jugadores++;
      if (jugadores > 2) {
        res.status(403);
      }
    session.jugador = jugadores;
  }
  const meToca = (turno == session.jugador);
  console.log(meToca);
  if (meToca == 1) {
    usuario = "Blancas";
  } else {
    usuario = "Negras";
  }
  res.render('index', { title: 'Ajedrez', tablero, meToca, usuario });
});

function esBlanca(ficha) {
  return (ficha.indexOf("B") == 0);
}
function esNegra(ficha) {
  return (ficha.indexOf("N") == 0);
}

// idealmente, esta función colocaría un 0 en el punto
// de origen (primer click) y sustituiría lo del
// punto de destino (segundo click) por la ficha (si la 
// validación en el lado cliente se completa).
    // function ponerFicha(ficha, destino, origen) {
    //   tablero.splice(destino, 1, ficha);
    //   tablero.splice(origen, 1, 0);
    // }
// function ponerFicha(ficha, filaDestino, filaOrigen, columnaDestino, columnaOrigen) {
//   tablero[[filaOrigen, columnaOrigen]] = 0;
//   tablero[[filaDestino, columnaDestino]] = ficha; 
// }

router.post('/ponerficha', function(req, res, next) {
  // esto contiene la posición del botón que hemos pulsado 
  const {fila, columna, ficha} = req.body;
  console.log(fila,columna,ficha);

  res.render('index', { title: 'Ajedrez', tablero });
});

module.exports = router;
