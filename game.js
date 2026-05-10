import Phaser from 'phaser'
import GameScene from './scenes/GameScene.js'
import NewScene from './scenes/NewScene.js'
import CharacterSelection from './scenes/characterSelection.js'
import RulesScene from './scenes/RulesScene.js'
import HUDScene from './scenes/HUDScene.js'
import GameOverScene from './scenes/GameOverScene.js'

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1a1a2e',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: { 
            gravity: { y: 2000 },
            fps: 120,
            debug: false 
        }
    },
    scene: [CharacterSelection, RulesScene, GameScene, HUDScene, GameOverScene, NewScene]
})
