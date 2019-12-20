class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }


preload(){
this.load.image("sky", "assets/sky.png");
this.load.spritesheet("ship", "assets/Ligher.png" ,{
frameWidth: 16,
frameHeight: 16
});
this.load.spritesheet("ship2", "assets/Paranoid.png" ,{
frameWidth: 32,
frameHeight: 16
});
this.load.spritesheet("ship3", "assets/ship3.png" ,{
frameWidth: 32,
frameHeight: 32
});

this.load.spritesheet("explosion", "assets/explosion.png" ,{
frameWidth: 16,
frameHeight: 16
});

this.load.spritesheet("playerShip", "assets/Dove.png" ,{
frameWidth: 16,
frameHeight: 24
});

create() {
this.add.text(20,20, "Loading game...");
this.scene.start("playGame");


this.anims.create({
key: "ship1_anim",
frames: this.anims.generateFrameNumbers("ship"),
frameRate:20,
  repeat: -1
});

this.anims.create({
key: "ship2_anim",
frames: this.anims.generateFrameNumbers("ship2"),
frameRate:20,
  repeat: -1
});

this.anims.create({
key: "ship3_anim",
frames: this.anims.generateFrameNumbers("ship3"),
frameRate:20,
  repeat: -1
});

this.anims.create({
key: "explode",
frames: this.anims.generateFrameNumbers("explosion"),
frameRate:20,
  repeat: 0,
  hideOnComplete: true
});

this.anims.create({
key:"thrust",
frames: this.anims.generateFrameNumbers("player"),
frameRate: 20,
repeat: -1
})

}
