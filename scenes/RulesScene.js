import { Scene } from '@tialops/maki'

export default class RulesScene extends Scene {
    constructor() {
        super('RulesScene')
    }

    preload() {
        this.load.image('rules-bg-samurai', 'rooms/rules_bg_samurai.png')
        this.load.image('rules-bg-gangster', 'rooms/rules_bg_gangster.png')
    }

    create() {
        // Read character from registry
        const selection = this.registry.get('selectedCharacter') || 'GANGSTER'
        const prefix = selection === 'GANGSTER' ? 'g' : 's'
        const bgKey = selection === 'GANGSTER' ? 'rules-bg-gangster' : 'rules-bg-samurai'

        // Background
        const bg = this.add.image(400, 300, bgKey)
        bg.setDisplaySize(800, 600)
        
        // 1. Dynamic Character Introduction
        let introText = ''
        if (selection === 'GANGSTER') {
            introText = "The Gangster arrives to clear the streets."
        } else {
            introText = "The Samurai draws his blade to restore honor."
        }

        // Title
        const title = this.add.text(400, 50, 'RULES & CONTROLS', { font: 'bold 44px Courier', fill: '#ff0000', stroke: '#000000', strokeThickness: 6 }).setOrigin(0.5)
        title.setShadow(0, 0, '#ff0000', 15, true, true)

        // Character Intro Text
        this.add.text(400, 110, introText, { font: '24px Courier', fill: '#ffffff', stroke: '#000000', strokeThickness: 4 }).setOrigin(0.5)
        
        // Character Sprite (placed on the pedestal)
        const sprite = this.add.sprite(400, 240, `${prefix}-idle-select`).setScale(1.5)
        this.anims.create({ key: `${prefix}-idle-rules`, frames: this.anims.generateFrameNumbers(`${prefix}-idle-select`), frameRate: 10, repeat: -1 })
        sprite.play(`${prefix}-idle-rules`)

        // 2. Scoring Rule with Golden Brackets effect
        const ruleText = this.add.text(400, 340, '[ RULE: 1 KILL = 100 POINTS ]', { font: 'bold 28px Courier', fill: '#ffdd00', stroke: '#000000', strokeThickness: 5 }).setOrigin(0.5)
        ruleText.setShadow(0, 0, '#ffcc00', 10, true, true)

        // 3. Controls Display (with background panels)
        const startY = 400
        const spacing = 40
        const controls = [
            '[ A ] = Attack',
            '[ ↑ Top Arrow ] = Run / Jump',
            '[ ← Left Arrow ] = Move Left',
            '[ → Right Arrow ] = Move Right'
        ]

        const graphics = this.add.graphics()
        controls.forEach((text, index) => {
            const y = startY + (index * spacing)
            // Draw rounded rectangle background for each control
            graphics.fillStyle(0x000000, 0.6)
            graphics.lineStyle(2, 0x555555, 1)
            graphics.fillRoundedRect(200, y - 18, 400, 36, 8)
            graphics.strokeRoundedRect(200, y - 18, 400, 36, 8)

            this.add.text(400, y, text, { font: 'bold 20px Courier', fill: '#ffffff' }).setOrigin(0.5)
        })

        // 4. Play Button
        const playButton = this.add.text(400, 560, '>> PLAY <<', { 
            font: 'bold 42px Courier', 
            fill: '#00ff00',
            stroke: '#000000',
            strokeThickness: 6
        }).setOrigin(0.5).setInteractive({ useHandCursor: true })
        playButton.setShadow(0, 0, '#00ff00', 20, true, true)

        // Glitch/Pulse effect on play button
        this.tweens.add({
            targets: playButton,
            scale: 1.05,
            alpha: { from: 0.8, to: 1 },
            duration: 400,
            yoyo: true,
            repeat: -1
        })

        playButton.on('pointerdown', () => {
            // Stop menu BGM before entering the game
            const menuMusic = this.sound.get('menu-bgm')
            if (menuMusic) menuMusic.stop()
            this.scene.start('GameScene')
        })

        // 5. Extra Buttons (Quit / Options)
        this.add.text(60, 570, '[ QUIT ]', { font: 'bold 20px Courier', fill: '#888888' }).setOrigin(0.5)
        this.add.text(740, 570, '[ OPTIONS ]', { font: 'bold 20px Courier', fill: '#888888' }).setOrigin(0.5)
    }
}
