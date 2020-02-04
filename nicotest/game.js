
var gameSettings = {
  playerSpeed: 200,
}


var config = {
  width: 500,
  height: 300,
  scene: [Nico, Scene1, Scene2, Story1, Scene3],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
      debug: false
    }
  }
}
  var game = new Phaser.Game(config);
