const { VerletPhysics2D, VerletSpring2D } = toxi.physics2d;
const { GravityBehavior } = toxi.physics2d.behaviors;
const { Vec2D, Rect } = toxi.geom;

let physics;
let particles = [];
let springs = [];

function setup() {
  createCanvas(640, 360);

  physics = new VerletPhysics2D();

  let bounds = new Rect(0, 0, width, height);
  physics.setWorldBounds(bounds);

  particles.push(new Particle(200, 100));
  particles.push(new Particle(400, 100));
  particles.push(new Particle(350, 200));
  particles.push(new Particle(400, 300));
  particles.push(new Particle(200, 300));
  particles.push(new Particle(250, 200));

  springs.push(new Spring(particles[0], particles[1], 0.1));
  springs.push(new Spring(particles[1], particles[2], 0.1));
  springs.push(new Spring(particles[2], particles[3], 0.1));
  springs.push(new Spring(particles[3], particles[4], 0.1));
  springs.push(new Spring(particles[4], particles[5], 0.1));
  springs.push(new Spring(particles[5], particles[0], 0.1));
  springs.push(new Spring(particles[5], particles[2], 0.1));
  springs.push(new Spring(particles[0], particles[3], 0.1));
  springs.push(new Spring(particles[1], particles[4], 0.1));
}

function draw() {
  background(128);
  physics.update();

  fill(255);
  stroke(0);
  beginShape();
  particles.forEach(({ x, y }) => vertex(x, y));
  endShape(CLOSE);

  if (mouseIsPressed) {
    particles[0].lock();
    particles[0].x = mouseX;
    particles[0].y = mouseY;
    particles[0].unlock();
  }

  // DEBUG VIEW
  // particles.forEach((particle) => particle.show());
  // springs.forEach((spring) => spring.show());
}
