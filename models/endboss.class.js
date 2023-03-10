class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;
    IMAGES_WALKING = [
        '././img/4_enemie_boss_chicken/2_alert/G5.png',
        '././img/4_enemie_boss_chicken/2_alert/G6.png',
        '././img/4_enemie_boss_chicken/2_alert/G7.png',
        '././img/4_enemie_boss_chicken/2_alert/G8.png',
        '././img/4_enemie_boss_chicken/2_alert/G9.png',
        '././img/4_enemie_boss_chicken/2_alert/G10.png',
        '././img/4_enemie_boss_chicken/2_alert/G11.png',
        '././img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2200;
        this.animate();
    }

    animate() {
        setInterval(() => { // setInterval() ruft die Funktion immer wieder auf
            this.playAnimation(this.IMAGES_WALKING); // Chicken animieren
        }, 200); // 1000 Millisekunden = 1 Sekunde
    }

}