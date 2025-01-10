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
      const particles: { x: number; y: number; z: number }[] = [];
      
      // Initialize particles for the 'tools' animation
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * p.TWO_PI;
        particles.push({
          x: p.cos(angle) * 30,
          y: p.sin(angle) * 30,
          z: 0
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
            // Two figures arguing
            p.push();
            p.rotateY(rotation);
            
            // Figure 1
            p.push();
            p.translate(-20, 0, 0);
            p.fill(155, 135, 245);
            p.sphere(12); // Head
            p.translate(0, 20, 0);
            p.scale(1, 1.5, 1);
            p.cylinder(8, 25); // Body
            p.pop();

            // Figure 2
            p.push();
            p.translate(20, 0, 0);
            p.fill(214, 188, 250);
            p.sphere(12); // Head
            p.translate(0, 20, 0);
            p.scale(1, 1.5, 1);
            p.cylinder(8, 25); // Body
            p.pop();

            p.pop();
            break;

          case 'payments':
            // Animated coins/money
            p.push();
            p.rotateX(70);
            p.rotateZ(rotation);
            
            for (let i = 0; i < 3; i++) {
              p.push();
              p.translate(0, 0, i * 10);
              p.fill(i % 2 === 0 ? '#9b87f5' : '#D6BCFA');
              p.cylinder(20, 5, 24, 1);
              p.pop();
            }
            p.pop();
            break;

          case 'tools':
            // Particles merging and separating
            p.push();
            p.rotateY(rotation);
            const phase = p.sin(particleRotation);
            const radius = p.map(phase, -1, 1, 30, 5);
            
            particles.forEach((particle, i) => {
              const angle = (i / particles.length) * p.TWO_PI;
              const x = p.cos(angle) * radius;
              const y = p.sin(angle) * radius;
              
              p.push();
              p.translate(x, y, 0);
              p.fill(i % 2 === 0 ? '#9b87f5' : '#D6BCFA');
              p.sphere(5);
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