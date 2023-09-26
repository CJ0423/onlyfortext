let gameWidth = window.innerWidth
let gameHeight = window.innerHeight
if (gameWidth > 500) {
	gameWidth = 500
}
const config = {
	type: Phaser.AUTO,
	parent: 'root',  // 指定父元素
	width: gameWidth,
	height: gameHeight,
	scene: {
		preload: preload,
		create: create
	}
}

const game = new Phaser.Game(config)

function preload () {
	// 加載遊戲資源
	this.load.image("main-bg", "../assets/images/bg/main-bg.png")
}

function create () {
	// 初始化遊戲場景
	this.add.image(gameWidth / 2, gameHeight / 2, "main-bg")
}
