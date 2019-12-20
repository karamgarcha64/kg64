class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame")
  }



create(){
this.sky = this.add.tileSprite(0,0, game.config.width, game.config.height, "sky");
this.sky.setOrigin(0,0);
this.ship1 = this.add.sprite(config.width/2 - 50, config.height/2, "ship");
this.ship2 = this.add.sprite(config.width/2, config.height/2, "ship2");
this.ship3 = this.add.sprite(config.width/2 + 50, config.height/2, "ship3");

this.ship1.play("ship1_anim");
this.ship2.play("ship2_anim");
this.ship3.play("ship3_anim");

this.ship1.setInteractive();
this.ship2.setInteractive();
this.ship3.setInteractive();

this.imput.on('gameobjectdown', this.destroyShip, this);

this.player = this.physics.add.sprite(config.width / 2-8, config.height - 64, "player");
this.player.play("thrust");
this.cursorKeys = this.input.keyboard.createCursorKeys();
this.player.setCollideWorldBounds(true);
}







  update(){
  this.moveShip(this.ship1, 1);
  this.moveShip(this.ship2, 2);
  this.moveShip(this.ship3, 3);
  this.sky.tilePositionY -= 0.5;
  this.movePlayerManager();

}

movePlayerManager(){

if(this.cursorKeys.up.isDown){
this.player.setVelocityX(-gameSettings.playerSpeed);
} else if (this.cursorKeys.down.isDown){
  this.player.setVelocityX(gameSettings.playerSpeed);
}

if(this.cursorKeys.left.isDown){
this.player.setVelocityY(-gameSettings.playerSpeed);
} else if (this.cursorKeys.right.isDown){
  this.player.setVelocityY(gameSettings.playerSpeed);
}

}

moveShip(ship, speed) {
  ship.y += speed;
  if (ship.y > config.height) {
    this.resetShipPos(ship);
  }
}

resetShipPos(ship){
ship.y = 0;
var randomX = Phaser.Math.Between(0, config.width);
ship.x = randomX;
}

destroyShip(pointer, gameObject) {
gameObject.setTexture("explosion");
gameObject.play("explode");
}

}
