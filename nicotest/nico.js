class Nico extends Phaser.Scene {
constructor() {
    super("titleScreen");
  }
	
preload(){
	this.load.image("nico", "assets/nico.png");
}
create(){
	this.nicospr = this.add.sprite(config.width/2, config.height/2, "nico");
	this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}
update(){
	if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
    this.scene.start("bootGame");
	}
}
}