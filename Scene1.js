class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }


preload(){
this.load.image("sky", "assets/sky.png");
this.load.spritesheet("ship", "assets/ship1.png" ,{
  this.game.frameWidth: 16,
  this.game.frameHeight: 16
});
this.load.spritesheet("ship2", "assets/ship2.png" ,{
  this.game.frameWidth: 32,
  this.game.frameHeight: 16
});
this.load.spritesheet("ship3", "assets/ship3.png" ,{
  this.game.frameWidth: 32,
  this.game.frameHeight: 32
});

this.load.spritesheet("explosion", "assets/explosion.png" ,{
  this.game.frameWidth: 16,
  this.game.frameHeight: 16
});

create() {
this.add.text(20,20, "Loading game...");
this.scene.start("playGame");
}
}
