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

      p.setup = () => {
        const canvas = p.createCanvas(96, 96, p.WEBGL);
        canvas.parent(containerRef.current!);
        p.angleMode(p.DEGREES);
        p.noStroke();
      };

      p.draw = () => {
        p.background(0, 0, 0, 0);
        p.ambientLight(60);
        p.pointLight(155, 135, 245, 0, 0, 50); // Primary color light
        p.pointLight(214, 188, 250, 50, 50, 50); // Accent color light
        
        p.rotateX(rotation);
        p.rotateY(rotation * 0.5);

        switch (type) {
          case 'expectations':
            // Cube with multiple layers
            p.push();
            p.fill(155, 135, 245);
            p.box(40);
            p.fill(214, 188, 250, 150);
            p.box(50);
            p.pop();
            break;

          case 'payments':
            // Cylinder representing coins/payments
            p.push();
            p.fill(155, 135, 245);
            p.rotateX(90);
            p.cylinder(25, 10, 24, 1);
            p.translate(0, 0, 5);
            p.fill(214, 188, 250);
            p.cylinder(20, 10, 24, 1);
            p.pop();
            break;

          case 'tools':
            // Interconnected spheres representing tools
            p.push();
            p.fill(155, 135, 245);
            p.translate(-15, -15, 0);
            p.sphere(15);
            p.fill(214, 188, 250);
            p.translate(30, 30, 0);
            p.sphere(15);
            p.pop();
            break;

          case 'time':
            // Clock-like shape
            p.push();
            p.fill(155, 135, 245);
            p.torus(25, 5);
            p.rotateX(90);
            p.fill(214, 188, 250);
            p.cylinder(2, 35);
            p.pop();
            break;
        }

        rotation += 1;
      };
    };

    sketchRef.current = new p5(sketch);

    return () => {
      sketchRef.current?.remove();
    };
  }, [type]);

  return <div ref={containerRef} className="w-24 h-24 mx-auto" />;
};