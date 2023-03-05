class Character extends MovableObject {
    height = 280;
    y = 80;
    speed = 10;
    IMAGES_WALKING = [
        '././img/2_character_pepe/2_walk/W-21.png',
        '././img/2_character_pepe/2_walk/W-22.png',
        '././img/2_character_pepe/2_walk/W-23.png',
        '././img/2_character_pepe/2_walk/W-24.png',
        '././img/2_character_pepe/2_walk/W-25.png',
        '././img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        '././img/2_character_pepe/3_jump/J-31.png',
        '././img/2_character_pepe/3_jump/J-32.png',
        '././img/2_character_pepe/3_jump/J-33.png',
        '././img/2_character_pepe/3_jump/J-34.png',
        '././img/2_character_pepe/3_jump/J-35.png',
        '././img/2_character_pepe/3_jump/J-36.png',
        '././img/2_character_pepe/3_jump/J-37.png',
        '././img/2_character_pepe/3_jump/J-38.png',
        '././img/2_character_pepe/3_jump/J-39.png'
    ];

    world;
    walking_sound = new Audio('audio/walking.mp3');

    constructor() { // Konstruktor
        super().loadImage('/img/2_character_pepe/2_walk/W-21.png'); // Super ruft die Klasse MovableObject auf
        this.loadImages(this.IMAGES_WALKING); // Lade alle Bilder für die Walking Animation
        this.loadImages(this.IMAGES_JUMPING); // Lade alle Bilder für die Jumping Animation
        this.applyGravity(); // Füge Gravitation hinzu
        this.animate(); // Character animieren
    }


    animate() { // Animation

        setInterval(() => {  // setInterval() ruft die Funktion immer wieder auf
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // Wenn die rechte Pfeiltaste gedrückt wird
                this.moveRight(); // Bewege das Objekt nach rechts
                this.otherDirection = false; // Setze die Variable otherDirection auf false
                this.walking_sound.play();

            }

            if (this.world.keyboard.LEFT && this.x > 0) { // Wenn die linke Pfeiltaste gedrückt wird und die x-Koordinate größer als 0 ist
                this.moveLeft(); // Bewege das Objekt nach links
                this.otherDirection = true; // Setze die Variable otherDirection auf true
                this.walking_sound.play();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);  // 1000 Millisekunden = 1 Sekunde


        setInterval(() => { // setInterval() ruft die Funktion immer wieder auf

            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50); // 1000 Millisekunden = 1 Sekunde
    }

    jump() {
        this.speedY = 30;
    }



}