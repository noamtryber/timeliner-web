import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const ThreeDSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let angle = 0;
      const points: { x: number; y: number; z: number }[] = [];
      const numPoints = 1000;
      let mouseXOffset = 0;
      let mouseYOffset = 0;
      
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight * 0.8, p.WEBGL);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        
        // Generate initial points in a sphere
        for (let i = 0; i < numPoints; i++) {
          const lat = p.map(p.random(), 0, 1, -p.PI/2, p.PI/2);
          const lon = p.map(p.random(), 0, 1, -p.PI, p.PI);
          const r = 200;
          
          points.push({
            x: r * p.cos(lat) * p.cos(lon),
            y: r * p.cos(lat) * p.sin(lon),
            z: r * p.sin(lat)
          });
        }
      };
      
      p.draw = () => {
        p.clear();
        p.background('rgba(26, 31, 44, 0)');
        
        // Update mouse offset for smooth movement
        const targetX = (p.mouseX - p.width/2) * 0.1;
        const targetY = (p.mouseY - p.height/2) * 0.1;
        mouseXOffset += (targetX - mouseXOffset) * 0.05;
        mouseYOffset += (targetY - mouseYOffset) * 0.05;
        
        p.rotateY(mouseXOffset * 0.01);
        p.rotateX(mouseYOffset * 0.01);
        
        // Draw points with depth
        points.forEach((point) => {
          p.push();
          p.translate(point.x, point.y, point.z);
          
          // Calculate distance from center for color
          const d = p.dist(0, 0, 0, point.x, point.y, point.z);
          const alpha = p.map(d, 0, 200, 255, 100);
          
          // Use brand colors
          p.fill(155, 135, 245, alpha); // Primary color
          p.noStroke();
          p.sphere(2);
          p.pop();
        });
        
        angle += 0.01;
      };
      
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight * 0.8);
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <section className="relative h-screen">
      <div ref={containerRef} className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      <div className="container relative z-10 mx-auto px-4 py-24 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text">
          Experience the Future of Video Management
        </h2>
      </div>
    </section>
  );
};