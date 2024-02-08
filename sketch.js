var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
//DECLARAR VARIABLES FUELS Y POWERCOINS
var allPlayers, car1, car2,fuels,powerCoins;
var cars = [];

//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  //SEGUNDO CARGAR IMAGENES DE RECOMPENSAS
  fuelImage=loadImage("../assets/fuel.png")
  powerCoinImage=loadImage("../assets/goldCoin.png")
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //TERCERO EXPLICAR FUNCIONES LLAMDAS DESDE GAME
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  //CUARTO EXPLICAR CONDICIONALES PARA ACTUALIZAR E INICIAR EL JUEGO
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  //QUINTO PREGUNTAR DONDE DEBEMOS AGREGAR LOS SPRITES DEL COMBUSTIBLE Y LAS MONEDAS (GAME)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
