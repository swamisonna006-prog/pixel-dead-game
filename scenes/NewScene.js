import { Scene, manager } from '@tialops/maki'

export default class NewScene extends Scene {
    constructor() {
        super('charac')
    }

    preload() {
        super.preload()
        manager.map(this, 'charac')

        this.player = this.maki.player('Run')
        manager.preload(this)
    }

    create() {
        super.create()
        manager.create(this)

        this.add.text(10, 10, 'CHARAC SCENE', { font: '16px Courier', fill: '#ffff00' }).setScrollFactor(0)

        this.player.sprite.setPosition(400, 400)

        this.physics.add.collider(this.player.sprite, manager.getWallGroup(this, 'charac'))

        // Camera follow and zoom
        this.cameras.main.startFollow(this.player.sprite)
        this.cameras.main.setZoom(2)
        this.cameras.main.setBounds(0, 0, 800, 600)

        this.input.keyboard.on('keyup-Y', () => {
            this.scene.start('GameScene')
        })
    }

    update() {
        this.maki.move(this.player)
    }

    _getConfig(name = 'lia') {
        const isRun = name.toLowerCase() === 'run'
        return {
            sprite: {
                file: isRun ? 'Run.png' : 'lia.png',
                layout: 'row',
                cols: 24,
                rows: 1,
                frameWidth: 32,
                frameHeight: 64,
                directions: {
                    right: { start: 0, end: 5 },
                    up: { start: 6, end: 11 },
                    left: { start: 12, end: 17 },
                    down: { start: 18, end: 23 }
                }
            }
        }
    }
}