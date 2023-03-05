class MovableObject { // MovableObject ist eine Klasse
    x = 120;
    y = 270;
    img;
    height = 150;
    width = 150;
    imageCache = {}; // Cache für Bilder
    currentImage = 0; // Index des aktuellen Bildes
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    accleration = 2.5;
    energy = 100;

    /**
     * Gravitation // 
     */
    applyGravity() { // Gravitation
        setInterval(() => { // setInterval() ruft die Funktion immer wieder auf
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;  // Bewege das Objekt nach unten
                this.speedY -= this.accleration; // Erhöhe die Geschwindigkeit nach unten
            }
        }, 1000 / 25);
    }

    /**
     * Prüft, ob das Objekt über dem Boden ist
     * @returns {boolean} - true, wenn das Objekt über dem Boden ist
     *                     false, wenn das Objekt auf dem Boden ist
     */

    isAboveGround() {
        return this.y < 180;
    }


    /**
     * Lädt ein Bild
     * @param {string} path - Pfad zum Bild
     * @returns {Image} - Bild
     * @example
     * loadImage('img/test.png');
     */

    loadImage(path) {
        this.img = new Image(); // Erstelle ein neues Image-Objekt
        this.img.src = path; // Setze den Pfad des Bildes
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // Zeichne das Objekt auf dem Canvas
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath(); // Beginne einen neuen Pfad
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(obj) {
        return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
            (this.Y + this.offsetY + this.height) >= obj.Y &&
            (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
            obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    /**
     * 
     * @param {Array} arr - Array mit Pfaden zu den Bildern
     */

    loadImages(arr) { // arr = ['img/test.png', 'img/test2.png']
        arr.forEach((path) => { // path = 'img/test.png'
            let img = new Image(); // Erstelle ein neues Image-Objekt
            img.src = path; // Setze den Pfad des Bildes
            this.imageCache[path] = img; // Speichere das Bild im Cache
        });
    }

    /**
     * Spielt eine Animation ab
     * @param {Array} images - Array mit Pfaden zu den Bildern
     * @example
     * playAnimation(['img/test.png', 'img/test2.png']);
     * 
        */

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // Modulo-Operator: Rest der Division // let i = 0 % 5 = 0 // 1 % 6 = 0 = 5 // 
        let path = images[i]; // Pfad zum aktuellen Bild
        this.img = this.imageCache[path]; // Setze das Bild auf das aktuelle Bild
        this.currentImage++;  // Erhöhe den Index des aktuellen Bildes um 1
    }

    moveRight() {
        this.x += this.speed;   // Bewege das Objekt nach rechts


    }


    moveLeft() {
        this.x -= this.speed; // Bewege das Objekt nach links

    }

    jump() {
        this.speedY = 30;
    }

}   