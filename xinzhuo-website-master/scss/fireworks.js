const fireworksElement = document.getElementById('fireworks');
const options = {
    maxRockets: 3,            // max # of rockets to spawn
    rocketSpawnInterval: 150, // millisends to check if new rockets should spawn
    numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
    explosionMinHeight: 20,   // minimum height for random explode
    explosionMaxHeight: 200,  // maximum height for random explode
    explosionChance: 0.08     // chance in each tick the rocket will explode
}

// instantiate the constructor function
const fireworks = new Fireworks(fireworksElement, options);

// start the fireworks!
fireworks.start();