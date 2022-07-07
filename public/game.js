class Dog{
    constructor(scene) {
        this.sprite = scene.physics.add.sprite(250, 150, 'dog');
        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNumbers('dog', {
                frames: [4, 5, 6, 7]
            }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'sit',
            frames: scene.anims.generateFrameNumbers('dog', {
                frames: [23, 24, 25, 26]
            }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'run',
            frames: scene.anims.generateFrameNumbers('dog', {
                frames: [32, 33]
            }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'sleep',
            frames: scene.anims.generateFrameNumbers('dog', {
                frames: [28, 29]
            }),
            frameRate: 8,
            repeat: -1
        });

    }
    walk(){
        this.sprite.play('walk');
    }
    sit(){
        this.sprite.play('sit');
    }
    sleep(){
        this.sprite.play('sleep');
    }
    run(){
        this.sprite.play('run');
    }
}

let dog;

function preload () {
    this.load.spritesheet('dog', 'assets/dog.png', {
        frameWidth: 160,
        frameHeight: 160
    });
    this.load.image('grass', 'assets/grass.jpg');
}

function create () {
    this.bg = this.physics.add.image(0, 0, 'grass');
    this.bg.setOrigin(0, 0);
    dog = new Dog(this);
}

const getSprite = (name)=>{
    if(name === "dog"){
        return dog;
    }
};

const createGame = ()=>{
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 500,
        height: 500,
        physics: {
            default: 'arcade'
        },
        parent:"container",
        scene: {
            preload: preload,
            create: create
        }
    });
};

export {
    getSprite,
    createGame
}


