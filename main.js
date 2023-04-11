var gameScene = new Phaser.Scene('Game');

gameScene.preload = function() {
  this.load.image('button', 'button-text.png');
};

gameScene.create = function() {
  var button = this.add.sprite(400, 300, 'button');
  button.setInteractive();

  button.on('pointerdown', function() {
    console.log('Button clicked!');
  });
};

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: gameScene
};

var game = new Phaser.Game(config);
