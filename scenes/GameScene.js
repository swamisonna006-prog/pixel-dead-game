import { Scene, manager } from '@tialops/maki'

export default class GameScene extends Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        super.preload()
        manager.map(this, 'brandenew')
        manager.preload(this)

        // Load Forest Background Image
        this.load.image('forest-bg', 'rooms/environment-preview.png')

        // Load Gangster_2 Sprites
        const path = 'gameAssets/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/'
        this.load.spritesheet('g-idle', path + 'Idle.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('g-run', path + 'Walk.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('g-attack1', path + 'Attack_1.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('g-attack2', path + 'Attack_2.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('g-attack3', path + 'Attack_3.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('g-hurt', path + 'Hurt.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('g-jump', path + 'Jump.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('g-dead', path + 'Dead.png', { frameWidth: 128, frameHeight: 128 })

        // Load Samurai Sprites
        const sPath = 'gameAssets/craftpix-net-453698-free-shinobi-sprites-pixel-art/Samurai/'
        this.load.spritesheet('s-idle', sPath + 'Idle.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-run', sPath + 'Run.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-attack1', sPath + 'Attack_1.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-attack2', sPath + 'Attack_2.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-attack3', sPath + 'Attack_3.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-hurt', sPath + 'Hurt.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-jump', sPath + 'Jump.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('s-dead', sPath + 'Dead.png', { frameWidth: 128, frameHeight: 128 })

        // UI Assets
        const uiPath = 'gameAssets/Treasure Hunters (1)/Treasure Hunters/Wood and Paper UI/Sprites/Life Bars/'
        this.load.image('hb-left', uiPath + 'Big Bars/1.png')
        this.load.image('hb-mid', uiPath + 'Big Bars/3.png')
        this.load.image('hb-right', uiPath + 'Big Bars/4.png')
        this.load.image('hb-color', uiPath + 'Colors/1.png')

        // Load Pig Sprites
        this.load.spritesheet('pig-run', 'gameAssets/Kings and Pigs/Sprites/03-Pig/Run (34x28).png', { frameWidth: 34, frameHeight: 28 })
        this.load.spritesheet('pig-attack', 'gameAssets/Kings and Pigs/Sprites/03-Pig/Attack (34x28).png', { frameWidth: 34, frameHeight: 28 })

        // Game Audio SFX
        const sfxPath = 'gameAssets/18 High Quality 8-bit Musics/'
        this.load.audio('attack-sfx', sfxPath + '10_Battle_SFX/35_Miss_Evade_02.wav')
        this.load.audio('enemy-death-sfx', sfxPath + '10_Battle_SFX/69_Enemy_death_01.wav')

        // Load King Pig Sprites
        const kpPath = 'gameAssets/Kings and Pigs/Sprites/02-King Pig/'
        this.load.spritesheet('kp-idle', kpPath + 'Idle (38x28).png', { frameWidth: 38, frameHeight: 28 })
        this.load.spritesheet('kp-run', kpPath + 'Run (38x28).png', { frameWidth: 38, frameHeight: 28 })
        this.load.spritesheet('kp-attack', kpPath + 'Attack (38x28).png', { frameWidth: 38, frameHeight: 28 })
        this.load.spritesheet('kp-hurt', kpPath + 'Hit (38x28).png', { frameWidth: 38, frameHeight: 28 })
        this.load.spritesheet('kp-dead', kpPath + 'Dead (38x28).png', { frameWidth: 38, frameHeight: 28 })

        // Load Zombie Sprites
        const zPath = 'gameAssets/Free-Urban-Zombie-Sprite-Sheet-Pixel-Art-Pack/Zombie_1/'
        this.load.spritesheet('z-walk', zPath + 'Walk.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z-attack', zPath + 'Attack.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z-hurt', zPath + 'Hurt.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z-dead', zPath + 'Dead.png', { frameWidth: 128, frameHeight: 128 })

        // Load Zombie_3 Sprites
        const z3Path = 'gameAssets/Free-Urban-Zombie-Sprite-Sheet-Pixel-Art-Pack/Zombie_3/'
        this.load.spritesheet('z3-walk', z3Path + 'Walk.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z3-attack', z3Path + 'Attack.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z3-hurt', z3Path + 'Hurt.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z3-dead', z3Path + 'Dead.png', { frameWidth: 128, frameHeight: 128 })

        // Load Zombie_4 Sprites
        const z4Path = 'gameAssets/Free-Urban-Zombie-Sprite-Sheet-Pixel-Art-Pack/Zombie_4/'
        this.load.spritesheet('z4-walk', z4Path + 'Walk.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z4-attack', z4Path + 'Attack.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z4-hurt', z4Path + 'Hurt.png', { frameWidth: 128, frameHeight: 128 })
        this.load.spritesheet('z4-dead', z4Path + 'Dead.png', { frameWidth: 128, frameHeight: 128 })
    }

    create() {
        super.create()

        // No extra background needed - the tilemap renders the 'environment-preview' image directly.

        manager.create(this)

        this.add.text(400, 10, 'FOREST EXPEDITION', { font: '24px Courier', fill: '#ffffff' }).setScrollFactor(0)

        // Get Selection
        const selection = this.registry.get('selectedCharacter') || 'GANGSTER'
        const prefix = selection === 'GANGSTER' ? 'g' : 's'
        this.playerPrefix = prefix

        // Setup Player
        this.player = this.physics.add.sprite(50, -50, `${prefix}-idle`)
        this.player.setDepth(10)
        this.player.setMaxVelocity(500, 1500)
        this.player.setGravityY(4500) // Very fast fall
        this.physics.world.setBounds(0, 0, 800, 600)
        // this.player.setCollideWorldBounds(true)
        this.player.body.setSize(40, 80) // Adjust hitbox
        this.player.body.setOffset(44, 48) // Center hitbox horizontally and align to bottom feet
        this.physics.add.collider(this.player, manager.getWallGroup(this, 'brandenew'))

        // Map collisions only


        // Setup Pig Enemy (Moved onto the floor of the 288px map)
        this.pig = this.physics.add.sprite(500, 400, 'pig-run')
        this.pig.setDepth(10) // Bring pig to front
        // this.pig.setCollideWorldBounds(true)
        // this.physics.add.collider(this.pig, manager.getWallGroup(this, 'brandenew'))

        // Gangster Animations
        this.anims.create({ key: 'g-idle-anim', frames: this.anims.generateFrameNumbers('g-idle'), frameRate: 10, repeat: -1 })
        this.anims.create({ key: 'g-run-anim', frames: this.anims.generateFrameNumbers('g-run'), frameRate: 12, repeat: -1 })
        this.anims.create({ key: 'g-attack1-anim', frames: this.anims.generateFrameNumbers('g-attack1'), frameRate: 15, repeat: 0 })
        this.anims.create({ key: 'g-attack2-anim', frames: this.anims.generateFrameNumbers('g-attack2'), frameRate: 15, repeat: 0 })
        this.anims.create({ key: 'g-attack3-anim', frames: this.anims.generateFrameNumbers('g-attack3'), frameRate: 15, repeat: 0 })
        this.anims.create({ key: 'g-hurt-anim', frames: this.anims.generateFrameNumbers('g-hurt'), frameRate: 10, repeat: 0 })
        this.anims.create({ key: 'g-jump-anim', frames: this.anims.generateFrameNumbers('g-jump'), frameRate: 10, repeat: 0 })
        this.anims.create({ key: 'g-dead-anim', frames: this.anims.generateFrameNumbers('g-dead'), frameRate: 10, repeat: 0 })

        // Samurai Animations
        this.anims.create({ key: 's-idle-anim', frames: this.anims.generateFrameNumbers('s-idle'), frameRate: 10, repeat: -1 })
        this.anims.create({ key: 's-run-anim', frames: this.anims.generateFrameNumbers('s-run'), frameRate: 12, repeat: -1 })
        this.anims.create({ key: 's-attack1-anim', frames: this.anims.generateFrameNumbers('s-attack1'), frameRate: 15, repeat: 0 })
        this.anims.create({ key: 's-attack2-anim', frames: this.anims.generateFrameNumbers('s-attack2'), frameRate: 15, repeat: 0 })
        this.anims.create({ key: 's-attack3-anim', frames: this.anims.generateFrameNumbers('s-attack3'), frameRate: 15, repeat: 0 })
        this.anims.create({ key: 's-hurt-anim', frames: this.anims.generateFrameNumbers('s-hurt'), frameRate: 10, repeat: 0 })
        this.anims.create({ key: 's-jump-anim', frames: this.anims.generateFrameNumbers('s-jump'), frameRate: 10, repeat: 0 })
        this.anims.create({ key: 's-dead-anim', frames: this.anims.generateFrameNumbers('s-dead'), frameRate: 10, repeat: 0 })

        // UI & Score
        this.score = 0
        this.playerHealth = 30
        this.playerMaxHealth = 30
        this.totalZombies = 0
        this.killedZombies = 0
        this.midTriggerFired = false
        this.endTriggerFired = false

        // Launch the HUD as a parallel scene rendered on top
        this.scene.launch('HUDScene')

        // Pig Animations
        this.anims.create({ key: 'pig-run-anim', frames: this.anims.generateFrameNumbers('pig-run', { start: 0, end: 5 }), frameRate: 10, repeat: -1 })
        this.anims.create({ key: 'pig-attack-anim', frames: this.anims.generateFrameNumbers('pig-attack', { start: 0, end: 2 }), frameRate: 10, repeat: -1 })

        // King Pig Animations
        this.anims.create({ key: 'kp-idle-anim', frames: this.anims.generateFrameNumbers('kp-idle'), frameRate: 8, repeat: -1 })
        this.anims.create({ key: 'kp-run-anim', frames: this.anims.generateFrameNumbers('kp-run'), frameRate: 10, repeat: -1 })
        this.anims.create({ key: 'kp-attack-anim', frames: this.anims.generateFrameNumbers('kp-attack'), frameRate: 12, repeat: 0 })
        this.anims.create({ key: 'kp-hurt-anim', frames: this.anims.generateFrameNumbers('kp-hurt'), frameRate: 10, repeat: 0 })
        this.anims.create({ key: 'kp-dead-anim', frames: this.anims.generateFrameNumbers('kp-dead'), frameRate: 6, repeat: 0 })

        // Zombie Animations — all 3 types
        const zombieTypes = ['z', 'z3', 'z4']
        zombieTypes.forEach(t => {
            if (!this.anims.exists(`${t}-walk-anim`)) {
                this.anims.create({ key: `${t}-walk-anim`, frames: this.anims.generateFrameNumbers(`${t}-walk`), frameRate: 8, repeat: -1 })
                this.anims.create({ key: `${t}-attack-anim`, frames: this.anims.generateFrameNumbers(`${t}-attack`), frameRate: 10, repeat: 0 })
                this.anims.create({ key: `${t}-hurt-anim`, frames: this.anims.generateFrameNumbers(`${t}-hurt`), frameRate: 10, repeat: 0 })
                this.anims.create({ key: `${t}-dead-anim`, frames: this.anims.generateFrameNumbers(`${t}-dead`), frameRate: 5, repeat: 0 })
            }
        })

        // Setup Zombies Group
        this.zombies = this.physics.add.group()

        // Initial wave of 2 zombies at spawn
        for (let i = 0; i < 2; i++) {
            this.spawnZombie(380 + (i * 60), -50)
        }

        // ── Zombie Timer: 1 zombie at middle + 1 at end, every 2 seconds, at ground level ──
        this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {
                this.spawnZombie(Phaser.Math.Between(370, 430), 480) // middle ground
                this.spawnZombie(Phaser.Math.Between(680, 760), 480) // end ground
            }
        })

        // King Pig group
        this.kingPigs = this.physics.add.group()

        // ── King Pig Timer: 2 every 5 seconds at GROUND LEVEL (middle + end) ──
        this.time.addEvent({
            delay: 5000,
            loop: true,
            callback: () => {
                this.spawnKingPig(Phaser.Math.Between(370, 430), 480) // middle ground
                this.spawnKingPig(Phaser.Math.Between(680, 760), 480) // end ground
            }
        })

        // King Pig collision with player — only handle player attacking KP here
        this.physics.add.collider(this.player, this.kingPigs, (player, kp) => {
            if (!kp.isDead && !kp.isHurt) {
                const isAttacking = player.anims.isPlaying && player.anims.currentAnim && player.anims.currentAnim.key.includes('attack')
                if (isAttacking) {
                    kp.health -= 1
                    kp.isHurt = true
                    kp.anims.play('kp-hurt-anim', true)
                    kp.setVelocityX(kp.x > player.x ? 150 : -150)

                    if (kp.health <= 0) {
                        kp.isDead = true
                        kp.anims.play('kp-dead-anim', true)
                        kp.setVelocity(0, 0)
                        kp.body.setEnable(false)
                        this.score += 200
                        this.killedZombies++
                        this.sound.play('enemy-death-sfx', { volume: 0.7 })
                        this.updateHealthUI()
                        this.time.delayedCall(1000, () => { kp.destroy() })
                    } else {
                        this.time.delayedCall(500, () => { kp.isHurt = false })
                    }
                }
            }
        })

        // Consolidated Collision: Player and Zombies
        this.physics.add.collider(this.player, this.zombies, (player, zombie) => {
            const isAttacking = player.anims.isPlaying && player.anims.currentAnim && player.anims.currentAnim.key.includes('attack')
            const dist = Phaser.Math.Distance.Between(player.x, player.y, zombie.x, zombie.y)

            // 1. Check if Player is attacking the Zombie
            if (isAttacking && !zombie.isHurt && !zombie.isDead) {
                const zt = zombie.zType || 'z'
                zombie.health -= 1
                zombie.isHurt = true
                zombie.anims.play(`${zt}-hurt-anim`, true)
                zombie.setVelocityX(zombie.x > player.x ? 100 : -100)

                if (zombie.health <= 0) {
                    zombie.isDead = true
                    zombie.anims.play(`${zt}-dead-anim`, true)
                    zombie.setVelocity(0, 0)
                    zombie.body.setEnable(false)
                    this.score += 100
                    this.killedZombies++
                    this.sound.play('enemy-death-sfx', { volume: 0.7 })
                    this.updateHealthUI()
                    this.time.delayedCall(1000, () => { zombie.destroy() })
                } else {
                    this.time.delayedCall(400, () => { zombie.isHurt = false })
                }
                return // Exit early so zombie doesn't simultaneously damage player while being slashed
            }

            // 2. Check if Zombie is damaging the Player
            if (!this.isHurt && !this.player.isDead && !zombie.isDead && dist < 40) {
                this.playerHealth -= 1
                this.updateHealthUI()

                if (this.playerHealth <= 0) {
                    this.triggerDeath()
                } else {
                    this.isHurt = true
                    this.player.anims.play(`${this.playerPrefix}-hurt-anim`, true)
                    this.player.setVelocity(this.player.x > zombie.x ? 150 : -150, -100)
                    this.time.delayedCall(400, () => { this.isHurt = false })
                }
            }
        })

        // ── Trigger Zones ──
        // Mid-map trigger (center X)
        this.midZone = this.add.zone(400, 300, 80, 600)
        this.physics.world.enable(this.midZone)
        this.midZone.body.setAllowGravity(false)
        this.midZone.body.moves = false

        // End-map trigger (right side)
        this.endZone = this.add.zone(750, 300, 80, 600)
        this.physics.world.enable(this.endZone)
        this.endZone.body.setAllowGravity(false)
        this.endZone.body.moves = false

        // State Variables
        this.attackCycle = 1
        this.isHurt = false
        this.cursors = this.input.keyboard.createCursorKeys()
        this.keys = this.input.keyboard.addKeys('A')

        // Collision: Player touched by Pig
        this.physics.add.collider(this.player, this.pig, () => {
            if (!this.isHurt && !this.player.isDead) {
                this.playerHealth -= 2 // Pig does 2 damage
                this.updateHealthUI()

                if (this.playerHealth <= 0) {
                    this.triggerDeath()
                } else {
                    this.isHurt = true
                    this.player.anims.play(`${this.playerPrefix}-hurt-anim`, true)
                    // Knockback
                    this.player.setVelocity(this.player.x > this.pig.x ? 200 : -200, -100)
                    this.time.delayedCall(500, () => {
                        this.isHurt = false
                    })
                }
            }
        })

        // Camera (Locked to the 800x600 map bounds)
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1)
        this.cameras.main.setZoom(2)
        this.cameras.main.setBounds(0, 0, 800, 600)
    }

    updateHealthUI() {
        const hud = this.scene.get('HUDScene')
        if (hud) hud.updateHUD(this.playerHealth, this.playerMaxHealth, this.score, this.killedZombies)
    }

    triggerDeath() {
        this.player.isDead = true
        this.player.anims.play(`${this.playerPrefix}-dead-anim`, true)
        this.player.setVelocity(0, 0)
        this.player.body.setEnable(false)

        // Wait for Dead animation to finish, then launch Game Over
        this.player.on('animationcomplete', (anim) => {
            if (anim.key === `${this.playerPrefix}-dead-anim`) {
                this.triggerGameOver()
            }
        })

        // Fallback: launch Game Over after 2 seconds regardless
        this.time.delayedCall(2000, () => {
            if (this.scene.isActive('GameScene')) this.triggerGameOver()
        })
    }

    triggerGameOver() {
        if (this._gameOverFired) return
        this._gameOverFired = true

        this.scene.pause('GameScene')
        this.scene.stop('HUDScene')
        this.scene.launch('GameOverScene', {
            score: this.score,
            kills: this.killedZombies
        })
    }

    update() {
        if (this.player.isDead || this.isHurt) return

        let isAttacking = false
        // 1. Manual Attack Logic (Type "A")
        if (Phaser.Input.Keyboard.JustDown(this.keys.A)) {
            isAttacking = true
            const animKey = `${this.playerPrefix}-attack${this.attackCycle}-anim`
            this.player.anims.play(animKey)
            this.sound.play('attack-sfx', { volume: 0.6 })
            this.attackCycle = (this.attackCycle % 3) + 1
        } else if (this.player.anims.isPlaying && this.player.anims.currentAnim && this.player.anims.currentAnim.key.includes('attack')) {
            isAttacking = true
        }

        // 2. Movement Logic
        this.player.setVelocity(0)

        if (this.cursors.right.isDown) {
            this.player.setVelocityX(160)
            if (!isAttacking) this.player.anims.play(`${this.playerPrefix}-run-anim`, true)
            this.player.flipX = false
        } else if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160)
            if (!isAttacking) this.player.anims.play(`${this.playerPrefix}-run-anim`, true)
            this.player.flipX = true
        }

        if (this.cursors.up.isDown && this.player.body.blocked.down) {
            this.player.setVelocityY(-1000)
            this.player.anims.play(`${this.playerPrefix}-jump-anim`, true)
        }

        if (!this.player.body.blocked.down) {
            this.player.anims.play(`${this.playerPrefix}-jump-anim`, true)
        }

        if (this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0 && !isAttacking) {
            this.player.anims.play(`${this.playerPrefix}-idle-anim`, true)
        }

        this.updatePigAI()
        this.updateZombieAI()
        this.updateKingPigAI()

        // ── Trigger Zones ──
        // Mid-map: spawn wave when player walks into center
        if (!this.midTriggerFired &&
            Phaser.Geom.Intersects.RectangleToRectangle(
                this.player.getBounds(), this.midZone.getBounds())) {
            this.midTriggerFired = true
            for (let i = 0; i < 5; i++) {
                this.spawnZombie(Phaser.Math.Between(370, 430), -50)
            }
        }

        // End-map: final wave when player reaches right side
        if (!this.endTriggerFired &&
            Phaser.Geom.Intersects.RectangleToRectangle(
                this.player.getBounds(), this.endZone.getBounds())) {
            this.endTriggerFired = true
            for (let i = 0; i < 8; i++) {
                this.spawnZombie(Phaser.Math.Between(680, 780), -50)
            }
        }
    }

    // ── Spawn a zombie at (x, y) with a randomised sprite type ──
    spawnZombie(x, y) {
        // Randomly pick type: z (Zombie_1), z3 (Zombie_3), or z4 (Zombie_4)
        const types = ['z', 'z3', 'z4']
        const type = types[Phaser.Math.Between(0, types.length - 1)]

        const zombie = this.zombies.create(x, y, `${type}-walk`)
        zombie.setCollideWorldBounds(true)
        zombie.setDepth(10)
        zombie.setMaxVelocity(500, 1200)
        zombie.body.setSize(40, 80)
        zombie.body.setOffset(44, 48)
        zombie.setGravityY(2000)
        zombie.health = 3
        zombie.isDead = false
        zombie.isHurt = false
        zombie.zType = type  // Store which sprite set to use

        this.physics.add.collider(zombie, manager.getWallGroup(this, 'brandenew'))
        zombie.anims.play(`${type}-walk-anim`, true)
        this.totalZombies++
        return zombie
    }

    updateZombieAI() {
        const zombies = this.zombies.getChildren()
        zombies.forEach((zombie, index) => {
            if (!zombie || zombie.isDead || zombie.isHurt) return

            const t = zombie.zType || 'z' // Fall back to original type
            const dist = Phaser.Math.Distance.Between(zombie.x, zombie.y, this.player.x, this.player.y)

            // Separation logic: don't get too close to other zombies
            let tooClose = false
            zombies.forEach((other, otherIdx) => {
                if (index !== otherIdx && Phaser.Math.Distance.Between(zombie.x, zombie.y, other.x, other.y) < 30) {
                    tooClose = true
                }
            })

            // Extremely close range - play attack anim
            if (dist < 40) {
                zombie.setVelocityX(0)
                zombie.anims.play(`${t}-attack-anim`, true)
                zombie.flipX = this.player.x < zombie.x
            } else {
                const direction = this.player.x > zombie.x ? 1 : -1
                const speed = tooClose ? 20 : 60
                zombie.setVelocityX(direction * speed)
                zombie.anims.play(`${t}-walk-anim`, true)
                zombie.flipX = direction === -1
            }
        })
    }

    updatePigAI() {
        const distance = Phaser.Math.Distance.Between(this.pig.x, this.pig.y, this.player.x, this.player.y)

        if (distance < 60) {
            this.pig.setVelocity(0, 0)
            this.pig.anims.play('pig-attack-anim', true)
            this.pig.body.setGravityY(0)
        } else if (distance < 300) {
            const angle = Phaser.Math.Angle.Between(this.pig.x, this.pig.y, this.player.x, this.player.y)
            this.pig.setVelocityX(Math.cos(angle) * 80)
            this.pig.anims.play('pig-run-anim', true)
            this.pig.flipX = this.pig.body.velocity.x > 0
        } else {
            this.pig.setVelocityX(0)
            this.pig.anims.play('pig-run-anim', true)
        }
    }

    // ── Spawn a King Pig at (x, y) ──
    spawnKingPig(x, y) {
        const kp = this.kingPigs.create(x, y, 'kp-run')
        kp.setCollideWorldBounds(true)
        kp.setDepth(12)           // On top of regular enemies
        kp.setScale(2)            // Bigger — it's a boss pig!
        kp.setMaxVelocity(500, 1500)
        kp.body.setSize(30, 24)
        kp.body.setOffset(4, 4)
        kp.setGravityY(3000)
        kp.health = 6             // Takes 6 hits
        kp.isDead = false
        kp.isHurt = false

        this.physics.add.collider(kp, manager.getWallGroup(this, 'brandenew'))
        kp.anims.play('kp-run-anim', true)
        return kp
    }

    updateKingPigAI() {
        this.kingPigs.getChildren().forEach(kp => {
            if (!kp || kp.isDead || kp.isHurt) return

            const dist = Phaser.Math.Distance.Between(kp.x, kp.y, this.player.x, this.player.y)

            if (dist < 45) {
                // Ultra close — stop and play attack animation
                kp.setVelocityX(0)
                kp.anims.play('kp-attack-anim', true)
                kp.flipX = this.player.x < kp.x

                // Deal damage to player when attacking (distance-based, like zombies)
                if (!this.isHurt && !this.player.isDead) {
                    this.playerHealth -= 2
                    this.updateHealthUI()
                    if (this.playerHealth <= 0) {
                        this.triggerDeath()
                    } else {
                        this.isHurt = true
                        this.player.anims.play(`${this.playerPrefix}-hurt-anim`, true)
                        this.player.setVelocity(this.player.x > kp.x ? 200 : -200, -150)
                        this.time.delayedCall(600, () => { this.isHurt = false })
                    }
                }
            } else {
                // Chase player
                const dir = this.player.x > kp.x ? 1 : -1
                kp.setVelocityX(dir * 90)
                kp.anims.play('kp-run-anim', true)
                kp.flipX = dir === -1
            }
        })
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
