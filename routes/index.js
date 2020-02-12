var express = require('express');
var router = express.Router();
const { comprobarGanador } = require ('../functions/comprobaciones')

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

  const ganador = comprobarGanador(tablero);
  
  if (ganador != 0) {
    res.render("winner", {ganador})
  } else {
    const meToca = (turno == session.jugador);
    console.log(meToca);
    if (meToca == 1) {
      usuario = "Blancas";
    } else {
      usuario = "Negras";
    }
    res.render('index', { title: 'Ajedrez', tablero, meToca, usuario });
  }
});

function esBlanca(ficha) {
  return (ficha.indexOf("B") == 0);
}
function esNegra(ficha) {
  return (ficha.indexOf("N") == 0);
}

router.post('/moverficha', function(req, res, next) {
  // alternamos el turno
  if (turno == 1) {
    turno = 2;
  } else {
    turno = 1;
  }
  res.redirect('/');
});

router.get("/miturno", function(req, res, next) {
  const meToca = (turno == req.session.jugador);
  if (meToca) {
    res.status(200).json(true);
  } else {
    res.status(400).json(false);
  }
})

module.exports = router;
