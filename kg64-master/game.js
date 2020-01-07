var gameSettings = {
  playerSpeed: 200,
}


var config = {
  width: 500,
  height: 300,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
      debug: false
    }
  }
}
  var game = new Phaser.Game(config);
