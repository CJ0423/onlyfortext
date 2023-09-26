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
}

function create () {
	// 初始化遊戲場景
}
