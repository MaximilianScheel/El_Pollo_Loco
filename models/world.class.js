class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    /**
     * 
     * @param {} canvas  - Canvas-Element aus der index.html Datei 
     * @param {*} ctx - 2D-Context des Canvas-Elements
     */
    constructor(canvas, keyboard) { // Konstruktor
        this.ctx = canvas.getContext('2d'); // 2D-Context des Canvas-Elements
        this.canvas = canvas; // Canvas-Element aus der index.html Datei
        this.keyboard = keyboard; // Keyboard-Objekt aus der index.html Datei
        this.draw(); // Zeichne das Canvas
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this; // Setze die Welt des Characters auf die aktuelle Welt 
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)) {
                    this.character.energy -= 10;
                    console.log('Collision', enemy, this.character.energy);
                }
            });
        }, 200);
    }

    // Zeichne das Canvas
    draw() {
        //Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Lösche das Canvas

        this.ctx.translate(this.camera_x, 0); // Verschiebe das Canvas um die Kamera

        this.addObjectsToMap(this.level.backgroundObjects); // Füge die Hintergrundobjekte dem Canvas hinzu
        this.addToMap(this.character); // Füge den Character dem Canvas hinzu
        this.addObjectsToMap(this.level.clouds); // Füge die Wolken dem Canvas hinzu
        this.addObjectsToMap(this.level.enemies); // Füge die Gegner dem Canvas hinzu

        this.ctx.translate(-this.camera_x, 0); // Verschiebe das Canvas um die Kamera

        // Draw() wird immer wieder aufgerufen
        let self = this; // Speichere die aktuelle Instanz in einer Variable
        requestAnimationFrame(function () {    // requestAnimationFrame() ruft die Funktion draw() immer wieder auf
            self.draw(); // Zeichne das Canvas
        });
    }

    /**
     * 
     * @param {*} objects - Array mit Objekten, die dem Canvas hinzugefügt werden sollen 
     */
    addObjectsToMap(objects) { // Füge Objekte dem Canvas hinzu
        objects.forEach(o => { // Für jedes Objekt im Array
            this.addToMap(o); // Füge das Objekt dem Canvas hinzu
        });
    }

    addToMap(mo) { // Füge ein Objekt dem Canvas hinzu
        if (mo.otherDirection) { // Wenn das Objekt in die andere Richtung schaut
            this.flipImage(mo);
        }
        mo.draw(this.ctx); // Zeichne das Objekt
        mo.drawFrame(this.ctx); // Zeichne den Rahmen des Objekts (nur für Debug-Zwecke

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save(); // Speichere den aktuellen Zustand des Canvas
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1); // Spiegelung des Canvas
        mo.x = mo.x * -1; // Spiegelung der X-Koordinate
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1; // Spiegelung der X-Koordinate
        this.ctx.restore(); // Setze den Zustand des Canvas zurück
    }

    
}