class Story1 extends Phaser.Scene {
constructor() {
    super("story1");
  }
	
preload(){
	this.load.image("nanako", "assets/nanako.png");
}
create(){
	this.bgspr = this.add.sprite(config.width/2, config.height/2, "nanako");
	this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}
update(){
	if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
    this.scene.start("playScene3");
	}
}
}