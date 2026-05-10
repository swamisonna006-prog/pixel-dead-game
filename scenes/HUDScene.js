export default class HUDScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HUDScene' })
    }

    create() {
        const W = this.scale.width   // 800
        const D = 10

        // Dark top bar
        this.add.rectangle(0, 0, W, 46, 0x000000, 0.85).setOrigin(0, 0).setDepth(D - 1)
        // Bottom border line
        this.add.rectangle(0, 46, W, 2, 0x444444).setOrigin(0, 0).setDepth(D)

        // LEFT: HP label
        this.add.text(10, 8, '\u2764HP', { font: 'bold 18px Courier', fill: '#ff4444', marginTop: '-2px' }).setDepth(D)

        // Health bar track
        this.add.rectangle(52, 14, 160, 20, 0x550000).setOrigin(0, 0).setDepth(D)

        // Health bar fill
        this.healthFill = this.add.rectangle(52, 14, 160, 20, 0x33cc33).setOrigin(0, 0).setDepth(D)

        // HP % text
        this.hpText = this.add.text(220, 11, '100%', {
            font: 'bold 15px Courier', fill: '#ffffff'
        }).setDepth(D)

        // CENTER: Score
        this.scoreText = this.add.text(W / 2, 11, 'SCORE: 0', {
            font: 'bold 22px Courier', fill: '#ffdd00',
            stroke: '#000000', strokeThickness: 4
        }).setOrigin(0.5, 0).setDepth(D)

        // RIGHT: Kills counter
        this.add.text(W - 160, 8, '☠ KILLS', {
            font: 'bold 14px Courier', fill: '#ff6666'
        }).setOrigin(0, 0).setDepth(D)

        this.enemyText = this.add.text(W - 10, 11, '0', {
            font: 'bold 28px Courier', fill: '#ff4444',
            stroke: '#000000', strokeThickness: 3
        }).setOrigin(1, 0).setDepth(D)
    }

    // Called by GameScene to push updates
    updateHUD(health, maxHealth, score, kills) {
        const pct = Math.max(0, health / maxHealth)
        this.healthFill.setDisplaySize(Math.max(1, 160 * pct), 20)
        const col = pct > 0.5 ? 0x33cc33 : pct > 0.25 ? 0xff8800 : 0xff2222
        this.healthFill.setFillStyle(col)
        this.hpText.setText(`${Math.round(pct * 100)}%`)
        this.scoreText.setText(`SCORE: ${score}`)
        this.enemyText.setText(`${kills}`)
    }
}
