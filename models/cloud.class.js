class Cloud extends MovableObject {
    y = 20;
    height = 400;
    width = 500;
    speed = 0.15;


    constructor() {
        super().loadImage('././img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // Zahl zwischen 200 und 700 - Chicken werden zufällig platziert
        this.animate();

    }

    animate() {
        this.moveLeft();
    }



}