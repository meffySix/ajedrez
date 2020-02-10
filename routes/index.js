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
  if (meToca) {
    usuario = "Blancas";
  } else {
    usuario = "Negras";
  }
  res.render('index', { title: 'Ajedrez', tablero, meToca, usuario });
});

router.post('/seleccionarficha', function(req, res, next) {
  
  function posiblesMovimientosPeon(ficha, origen, destino) {
    // tiene que mostrar las casillas a las que se puede mover
    // 1 o 2 filas arriba, misma columna
          // para las negras
          if (ficha.indexOf("N") = 0) {
            destino = origen.fila -= 1 || 2;
          // para las blancas
          } else if (ficha.indexOf("B") = 0) {
            destino = origen.fila += 1 || 2;
          }
  }

  res.render('index', { title: 'Ajedrez', tablero });
});

module.exports = router;
