import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface Frustration3DIconProps {
  type: 'expectations' | 'payments' | 'tools' | 'time';
}

export const Frustration3DIcon: React.FC<Frustration3DIconProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5>();

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let rotation = 0;
      let particleRotation = 0;
      const particles: { x: number; y: number; z: number; speed: number }[] = [];
      
      // Initialize particles for the 'tools' animation
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * p.TWO_PI;
        particles.push({
          x: p.cos(angle) * 30,
          y: p.sin(angle) * 30,
          z: p.random(-20, 20),
          speed: p.random(0.5, 2)
        });
      }

      p.setup = () => {
        const canvas = p.createCanvas(96, 96, p.WEBGL);
        canvas.parent(containerRef.current!);
        p.angleMode(p.DEGREES);
        p.noStroke();
      };

      p.draw = () => {
        p.background(0, 0, 0, 0);
        p.ambientLight(60);
        p.pointLight(155, 135, 245, 0, 0, 50);
        p.pointLight(214, 188, 250, 50, 50, 50);

        switch (type) {
          case 'expectations':
            // 3D X shape
            p.push();
            p.rotateY(rotation);
            p.rotateX(rotation * 0.5);
            
            // First diagonal line of X
            p.push();
            p.fill(155, 135, 245);
            p.rotateZ(45);
            p.translate(0, 0, 0);
            p.box(40, 8, 8);
            p.pop();
            
            // Second diagonal line of X
            p.push();
            p.fill(214, 188, 250);
            p.rotateZ(-45);
            p.translate(0, 0, 0);
            p.box(40, 8, 8);
            p.pop();
            
            p.pop();
            break;

          case 'payments':
            // Single rotating coin
            p.push();
            p.rotateX(70);
            p.rotateZ(rotation);
            
            // Coin body
            p.fill('#9b87f5');
            p.cylinder(25, 5, 24, 1);
            
            // Coin details
            p.push();
            p.translate(0, 0, 3);
            p.fill('#D6BCFA');
            p.cylinder(20, 2, 24, 1);
            p.pop();
            
            p.pop();
            break;

          case 'tools':
            // Dynamic moving particles
            p.push();
            p.rotateY(rotation * 0.5);
            
            particles.forEach((particle, i) => {
              // Update particle position
              particle.z = p.sin((rotation + i * 30) * particle.speed) * 20;
              const radius = p.map(p.sin(particleRotation * particle.speed), -1, 1, 15, 35);
              const x = p.cos((rotation * particle.speed + i * 30) / 30) * radius;
              const y = p.sin((rotation * particle.speed + i * 30) / 30) * radius;
              
              p.push();
              p.translate(x, y, particle.z);
              p.fill(i % 2 === 0 ? '#9b87f5' : '#D6BCFA');
              p.sphere(4);
              p.pop();
            });
            
            p.pop();
            break;

          case 'time':
            // Clock with moving hands
            p.push();
            p.rotateY(rotation);
            
            // Clock face
            p.fill(155, 135, 245);
            p.torus(25, 5, 24, 16);
            
            // Hour hand
            p.push();
            p.rotateZ(rotation * 0.5);
            p.fill(214, 188, 250);
            p.translate(0, -10, 0);
            p.box(3, 20, 3);
            p.pop();
            
            // Minute hand
            p.push();
            p.rotateZ(rotation * 2);
            p.fill(214, 188, 250);
            p.translate(0, -15, 0);
            p.box(2, 30, 2);
            p.pop();
            
            p.pop();
            break;
        }

        rotation += 1;
        particleRotation += 2;
      };
    };

    sketchRef.current = new p5(sketch);

    return () => {
      sketchRef.current?.remove();
    };
  }, [type]);

  return <div ref={containerRef} className="w-24 h-24 mx-auto" />;
};