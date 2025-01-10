import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const FrustrationBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      const numParticles = 50;
      let mouseX = p.windowWidth / 2;
      let mouseY = p.windowHeight / 2;
      
      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        
        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(4, 8);
          this.speedX = 0;
          this.speedY = 0;
          this.color = p.random() > 0.5 ? '#9b87f5' : '#7E69AB';
        }
        
        update(targetX: number, targetY: number) {
          // Calculate direction to mouse
          const dx = targetX - this.x;
          const dy = targetY - this.y;
          const distance = p.sqrt(dx * dx + dy * dy);
          
          // Update speed based on mouse position
          if (distance < 200) {
            this.speedX = p.lerp(this.speedX, dx * 0.01, 0.02);
            this.speedY = p.lerp(this.speedY, dy * 0.01, 0.02);
          } else {
            this.speedX = p.lerp(this.speedX, 0, 0.1);
            this.speedY = p.lerp(this.speedY, 0, 0.1);
          }
          
          // Update position
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Wrap around edges
          if (this.x < 0) this.x = p.width;
          if (this.x > p.width) this.x = 0;
          if (this.y < 0) this.y = p.height;
          if (this.y > p.height) this.y = 0;
        }
        
        draw() {
          p.noStroke();
          p.fill(this.color);
          p.circle(this.x, this.y, this.size);
        }
      }
      
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        
        // Initialize particles
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle());
        }
      };
      
      p.draw = () => {
        p.clear();
        p.background('rgba(26, 31, 44, 0.1)');
        
        // Smooth mouse movement
        mouseX = p.lerp(mouseX, p.mouseX, 0.1);
        mouseY = p.lerp(mouseY, p.mouseY, 0.1);
        
        // Update and draw particles
        particles.forEach(particle => {
          particle.update(mouseX, mouseY);
          particle.draw();
        });
      };
      
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};