class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    IMAGES_WALKING = [
        '././img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '././img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '././img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING); // Lade alle Bilder
        this.x = Math.random() * 500; // Zahl zwischen 200 und 700 - Chicken werden zufällig platziert
        this.speed = 0.15 + Math.random() * 0.5; // Zufällige Geschwindigkeit zwischen 0.15 und 0.3
        this.animate(); // Chicken animieren
    }




    animate() { // Animation
        setInterval(() => {
            this.moveLeft(); // Chicken bewegen
        }, 1000 / 60);
        this.moveLeft(); // Chicken bewegen
        setInterval(() => { // setInterval() ruft die Funktion immer wieder auf
            this.playAnimation(this.IMAGES_WALKING); // Chicken animieren
        }, 200); // 1000 Millisekunden = 1 Sekunde
    }


}