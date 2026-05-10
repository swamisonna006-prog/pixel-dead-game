export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' })
    }

    preload() {
        this.load.audio('gameover-music', 'gameAssets/18 High Quality 8-bit Musics/alphix-game-over-417465.mp3')
    }

    init(data) {
        // Receive final score and kills from GameScene
        this.finalScore = data.score || 0
        this.finalKills = data.kills || 0
    }

    create() {
        const W = this.scale.width
        const H = this.scale.height

        // ── Play Game Over music ──
        this.sound.stopAll()
        this.sound.play('gameover-music', { volume: 0.8, loop: false })

        // ── Vibration (mobile/supported browsers) ──
        if (navigator.vibrate) {
            navigator.vibrate([300, 100, 300, 100, 500])
        }

        // ── Dark overlay ──
        this.add.rectangle(0, 0, W, H, 0x000000, 0.85).setOrigin(0, 0)

        // ── Red vignette gradient effect ──
        const vignette = this.add.graphics()
        vignette.fillStyle(0x880000, 0.25)
        vignette.fillRect(0, 0, W, H)

        // ── "YOU DIED" title ──
        const title = this.add.text(W / 2, 110, 'YOU DIED', {
            font: 'bold 88px Courier',
            fill: '#cc0000',
            stroke: '#000000',
            strokeThickness: 8
        }).setOrigin(0.5)
        title.setShadow(0, 0, '#ff0000', 30, true, true)

        // Pulsing flicker on title
        this.tweens.add({
            targets: title,
            alpha: { from: 0.7, to: 1 },
            duration: 300,
            yoyo: true,
            repeat: -1
        })

        // ── Divider line ──
        this.add.rectangle(W / 2, 195, 500, 2, 0x550000).setOrigin(0.5)

        // ── Final Score ──
        this.add.text(W / 2, 250, `FINAL SCORE:  ${this.finalScore}`, {
            font: 'bold 36px Courier',
            fill: '#ffdd00',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5)

        // ── Zombies Killed ──
        this.add.text(W / 2, 310, `ZOMBIES KILLED:  ${this.finalKills}`, {
            font: 'bold 30px Courier',
            fill: '#ff6666',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5)

        // ── REMATCH button ──
        const rematch = this.add.text(W / 2 - 130, 430, '[ REMATCH ]', {
            font: 'bold 32px Courier',
            fill: '#00ff88',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5).setInteractive({ useHandCursor: true })
        rematch.setShadow(0, 0, '#00ff88', 12, true, true)

        rematch.on('pointerover', () => rematch.setStyle({ fill: '#ffffff' }))
        rematch.on('pointerout',  () => rematch.setStyle({ fill: '#00ff88' }))
        rematch.on('pointerdown', () => {
            this.scene.stop('HUDScene')
            this.scene.stop('GameOverScene')
            this.scene.start('GameScene')  // Restart with same character
        })

        // ── HOME button ──
        const home = this.add.text(W / 2 + 130, 430, '[ HOME ]', {
            font: 'bold 32px Courier',
            fill: '#44aaff',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5).setInteractive({ useHandCursor: true })
        home.setShadow(0, 0, '#44aaff', 12, true, true)

        home.on('pointerover', () => home.setStyle({ fill: '#ffffff' }))
        home.on('pointerout',  () => home.setStyle({ fill: '#44aaff' }))
        home.on('pointerdown', () => {
            this.registry.set('selectedCharacter', null)
            this.scene.stop('HUDScene')
            this.scene.stop('GameScene')
            this.scene.stop('GameOverScene')
            this.scene.start('CharacterSelection')
        })

        // ── Animated skull decorations ──
        this.add.text(80,  430, '💀', { font: '40px Arial' }).setOrigin(0.5)
        this.add.text(720, 430, '💀', { font: '40px Arial' }).setOrigin(0.5)

        // ── Bottom prompt ──
        const prompt = this.add.text(W / 2, 530, 'choose your fate...', {
            font: 'italic 18px Courier',
            fill: '#666666'
        }).setOrigin(0.5)
        this.tweens.add({
            targets: prompt,
            alpha: { from: 0.3, to: 0.9 },
            duration: 1500,
            yoyo: true,
            repeat: -1
        })
    }
}
