import { useEffect, useRef } from 'react';
import p5 from 'p5';
import { Timeline } from './timeline/Timeline';
import { GradientOverlay } from './timeline/GradientOverlay';

export const TimelineBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const timelines: Timeline[] = [];
      const numTimelines = 12;
      let mouseTrailX = 0;
      let mouseTrailY = 0;
      
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(containerRef.current!);
        
        const spacing = p.height / (numTimelines + 1);
        for (let i = 0; i < numTimelines; i++) {
          timelines.push(new Timeline(p, spacing * (i + 1)));
        }
      };
      
      p.draw = () => {
        p.clear();
        p.background('rgba(26, 31, 44, 0.02)'); // Reduced base opacity
        
        mouseTrailX = p.lerp(mouseTrailX, p.mouseX, 0.1);
        mouseTrailY = p.lerp(mouseTrailY, p.mouseY, 0.1);
        
        p.noFill();
        p.stroke('rgba(214, 188, 250, 0.15)'); // Reduced trail opacity
        p.strokeWeight(1);
        p.circle(mouseTrailX, mouseTrailY, 30);
        
        timelines.forEach(timeline => {
          timeline.update();
          timeline.draw();
        });
      };
      
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
      
      p.mousePressed = () => {
        timelines.forEach(timeline => {
          timeline.segments.forEach(segment => {
            const segX = timeline.x + segment.x;
            if (p.mouseX > segX && 
                p.mouseX < segX + segment.width && 
                p.abs(p.mouseY - timeline.y) < 10) {
              segment.color = 'rgba(214, 188, 250, 0.2)'; // Reduced highlight opacity
              setTimeout(() => {
                segment.color = p.random() > 0.5 ? 'rgba(155, 135, 245, 0.1)' : 'rgba(126, 105, 171, 0.1)'; // Reduced segment colors opacity
              }, 500);
            }
          });
        });
      };
    };

    const p5Instance = new p5(sketch);
    return () => p5Instance.remove();
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <GradientOverlay />
    </div>
  );
};