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

this.enemies = this.physics.add.group();
this.enemies.add(this.ship1);
this.enemies.add(this.ship2);
this.enemies.add(this.ship3);

this.ship1.play("ship1_anim");
this.ship2.play("ship2_anim");
this.ship3.play("ship3_anim");

this.ship1.setInteractive();
this.ship2.setInteractive();
this.ship3.setInteractive();

this.input.on('gameobjectdown', this.destroyShip, this);

this.playerShip = this.physics.add.sprite(config.width / 2-8, config.height - 64, "playerShip");
this.playerShip.play("thrust");
this.cursorKeys = this.input.keyboard.createCursorKeys();
this.playerShip.setCollideWorldBounds(true);

this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
console.log(this.spacebar);

this.projectiles = this.add.group();

this.physics.add.overlap(this.playerShip, this.enemies, this.hurtPlayer, null, this);

this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);

this.score = 0;
this.scoreLabel = this.add.text(10, 5, "SCORE " + this.score, {
	color: '#000'
});
}


hurtPlayer(player, enemy) {
    this.resetShipPos(enemy);
    player.x = config.width / 2 - 8;
    player.y = config.height - 64;
	this.score = 0;
	this.scoreLabel.text = "SCORE " + this.score;
  }

hitEnemy(projectile, enemy) {
    projectile.destroy();
    this.resetShipPos(enemy);
	this.score += 10;
	this.scoreLabel.text = "SCORE " + this.score;
}
  
  update(){
  this.moveShip(this.ship1, 1);
  this.moveShip(this.ship2, 2);
  this.moveShip(this.ship3, 3);
  this.sky.tilePositionY -= 0.5;
  this.movePlayerManager();

  if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
    this.shootLaser();
  }
  for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      var laser = this.projectiles.getChildren()[i];
      laser.update();
    }
}

shootLaser() {
    var laser = new Laser(this);
  }

movePlayerManager(){

if(this.cursorKeys.left.isDown){
this.playerShip.setVelocityX(-gameSettings.playerSpeed);
}
else if (this.cursorKeys.right.isDown){
  this.playerShip.setVelocityX(gameSettings.playerSpeed);
}

else {
  this.playerShip.setVelocityX(0);
}

if(this.cursorKeys.up.isDown){
this.playerShip.setVelocityY(-gameSettings.playerSpeed);
}
else if (this.cursorKeys.down.isDown){
  this.playerShip.setVelocityY(gameSettings.playerSpeed);
}

else {
  this.playerShip.setVelocityY(0);
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
