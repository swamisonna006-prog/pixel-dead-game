import { Scene } from '@tialops/maki'

export default class CharacterSelection extends Scene {
    constructor() {
        super('CharacterSelection')
    }

    preload() {
        // Load Custom Background
        this.load.image('select-bg', 'rooms/char_select_bg.png')

        // Load Gangster Idle
        const gPath = 'gameAssets/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/'
        this.load.spritesheet('g-idle-select', gPath + 'Idle.png', { frameWidth: 128, frameHeight: 128 })

        // Load Samurai Idle
        const sPath = 'gameAssets/craftpix-net-453698-free-shinobi-sprites-pixel-art/Samurai/'
        this.load.spritesheet('s-idle-select', sPath + 'Idle.png', { frameWidth: 128, frameHeight: 128 })

        // Load Attack Sprites for selection
        this.load.spritesheet('g-attack1-select', gPath + 'Attack_1.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-attack1-select', sPath + 'Attack_1.png', { frameWidth: 128, frameHeight: 128 })

        // Menu BGM
        this.load.audio('menu-bgm', 'gameAssets/18 High Quality 8-bit Musics/13. I am not clumsy.mp3')
    }

    create() {
        // Start menu BGM (looping)
        if (!this.sound.get('menu-bgm')) {
            this.menuMusic = this.sound.add('menu-bgm', { loop: true, volume: 0.5 })
        } else {
            this.menuMusic = this.sound.get('menu-bgm')
        }
        if (!this.menuMusic.isPlaying) this.menuMusic.play()

        // Phase 1: Splash Screen
        // Black background for the splash
        const bgBlack = this.add.rectangle(400, 300, 800, 600, 0x000000)
        
        const splashText = this.add.text(400, 300, 'DEAD PIXEL', {
            font: 'bold 80px Courier',
            fill: '#ff0000',
            stroke: '#550000',
            strokeThickness: 5
        }).setOrigin(0.5)
        
        splashText.setShadow(0, 0, '#ff0000', 25, true, true)
        splashText.setAlpha(0)
        splashText.setScale(0.5)

        // Blinking effect
        const blinkTimer = this.time.addEvent({
            delay: 100,
            loop: true,
            callback: () => {
                // Randomly toggle visibility for a flicker effect
                splashText.setVisible(Math.random() > 0.2)
            }
        })

        // Splash Animation Sequence (4 seconds)
        this.tweens.add({
            targets: splashText,
            scale: 1.5,
            duration: 4000,
            ease: 'Linear'
        })

        this.tweens.add({
            targets: splashText,
            alpha: 1,
            duration: 1500,
            yoyo: true,
            hold: 1000,
            ease: 'Power2',
            onComplete: () => {
                blinkTimer.remove()
                splashText.destroy()
                bgBlack.destroy()
                this.showSelectionScreen()
            }
        })
    }

    showSelectionScreen() {
        // Phase 2: Selection Screen

        // Add Detailed Background
        const bg = this.add.image(400, 300, 'select-bg')
        bg.setDisplaySize(800, 600)
        bg.setAlpha(0)
        this.tweens.add({ targets: bg, alpha: 1, duration: 1000 })

        // Header Text with Glow
        const header = this.add.text(400, 45, 'SELECT YOUR CHARACTER', {
            font: '36px Courier',
            fill: '#ff0000',
            stroke: '#000000',
            strokeThickness: 5,
            fontStyle: 'bold'
        }).setOrigin(0.5)
        header.setAlpha(0)
        header.setShadow(0, 0, '#ff0000', 15, true, true)

        // Glitch Effect for Header
        this.time.addEvent({
            delay: 150,
            loop: true,
            callback: () => {
                if (Math.random() > 0.8) {
                    header.setX(400 + Phaser.Math.Between(-4, 4))
                    header.setY(45 + Phaser.Math.Between(-4, 4))
                    header.setAlpha(Phaser.Math.FloatBetween(0.6, 1))
                } else {
                    header.setX(400)
                    header.setY(45)
                    header.setAlpha(1)
                }
            }
        })

        // Add glow effects behind characters
        const leftGlow = this.add.circle(230, 280, 80, 0x00ff00, 0.4)
        const rightGlow = this.add.circle(570, 280, 80, 0xff0000, 0.4)
        leftGlow.setAlpha(0)
        rightGlow.setAlpha(0)

        // Pulse the glows
        this.tweens.add({
            targets: [leftGlow, rightGlow],
            alpha: { from: 0.1, to: 0.6 },
            duration: 1500,
            yoyo: true,
            repeat: -1,
            delay: 1000 // Start after fade-in
        })

        // Character 1: Gangster (Left)
        this.anims.create({ key: 'g-idle-sel', frames: this.anims.generateFrameNumbers('g-idle-select'), frameRate: 10, repeat: -1 })
        this.anims.create({ key: 'g-attack-sel', frames: this.anims.generateFrameNumbers('g-attack1-select'), frameRate: 15, repeat: 0 })
        const gangster = this.add.sprite(230, 280, 'g-idle-select').setScale(1.5).setInteractive({ useHandCursor: true })
        gangster.play('g-idle-sel')
        const t1 = this.add.text(230, 450, 'GANGSTER', { font: '28px Courier', fill: '#ffffff', stroke: '#000000', strokeThickness: 3 }).setOrigin(0.5)
        gangster.setAlpha(0)
        t1.setAlpha(0)

        // Character 2: Samurai (Right)
        this.anims.create({ key: 's-idle-sel', frames: this.anims.generateFrameNumbers('s-idle-select'), frameRate: 10, repeat: -1 })
        this.anims.create({ key: 's-attack-sel', frames: this.anims.generateFrameNumbers('s-attack1-select'), frameRate: 15, repeat: 0 })
        const samurai = this.add.sprite(570, 280, 's-idle-select').setScale(1.5).setInteractive({ useHandCursor: true })
        samurai.play('s-idle-sel')
        const t2 = this.add.text(570, 450, 'SAMURAI', { font: '28px Courier', fill: '#ffffff', stroke: '#000000', strokeThickness: 3 }).setOrigin(0.5)
        samurai.setAlpha(0)
        t2.setAlpha(0)

        // Fade everything in
        this.tweens.add({ targets: [header, gangster, samurai, t1, t2], alpha: 1, duration: 1000 })
        this.tweens.add({ targets: [leftGlow, rightGlow], alpha: 0.4, duration: 1000 })

        // Selection Logic
        gangster.on('pointerdown', () => this.selectCharacter('GANGSTER', header, gangster, 'g-attack-sel'))
        samurai.on('pointerdown', () => this.selectCharacter('SAMURAI', header, samurai, 's-attack-sel'))
    }

    selectCharacter(name, header, sprite, attackAnim) {
        // Store selection globally
        this.registry.set('selectedCharacter', name)

        // Play the attack animation for feedback
        sprite.play(attackAnim)

        // Update Header
        header.setText(`${name} SELECTED`)
        header.setFill('#00ff00') // Green highlight

        // Transition Delay
        this.time.delayedCall(2000, () => {
            this.scene.start('RulesScene')
        })
    }
}
