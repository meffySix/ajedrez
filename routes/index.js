var express = require('express');
var router = express.Router();

const t = [
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
  // const ganador = comprobarGanador(t);
  // if (ganador != 0) {
  //   res.render("winner", {ganador})
  // } else {
    const meToca = (turno == session.jugador);
    console.log(meToca);
    if (session.jugador == 1) {
      usuario = "Blancas";
    } else {
      usuario = "Negras";
    }
    res.render('index', { title: 'Ajedrez', t, meToca, usuario });
  // }
});

// Al mover la ficha...
router.post('/moverficha', function(req, res, next) {
  
  if (turno == 1) {
    turno = 2;
  } else {
    turno = 1;
  }
  
  var movimiento = req.body.movimiento;
  var filaOrigen = movimiento[0];
  var columnaOrigen = movimiento[1];
  var filaDestino = movimiento[2];
  var columnaDestino = movimiento[3];
  t[filaDestino][columnaDestino] = t[filaOrigen][columnaOrigen];
  t[filaOrigen][columnaOrigen] = 0;
  // console.log('origen: ' + origen);
  // console.log('destino: ' + destino);
  // al enviar el movimiento, actualizar el tablero
  console.log(movimiento);
  res.redirect('/');
});

// Comprobar si es el turno del jugador o no
router.get("/miturno", function(req, res, next) {
  const meToca = (turno == req.session.jugador);
  if (meToca) {
    res.status(200).json(true);
  } else {
    res.status(400).json(false);
  }
})

module.exports = router;
