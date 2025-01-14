import { useEffect, useRef } from 'react';
import p5 from 'p5';
import { Timeline } from './timeline/Timeline';
import { GradientOverlay } from './timeline/GradientOverlay';
import { useLanguage } from '@/contexts/LanguageContext';

export const TimelineBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();

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
        p.background('rgba(26, 31, 44, 0.1)');
        
        mouseTrailX = p.lerp(mouseTrailX, p.mouseX, 0.1);
        mouseTrailY = p.lerp(mouseTrailY, p.mouseY, 0.1);
        
        p.noFill();
        p.stroke('#D6BCFA');
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
              segment.color = '#D6BCFA';
              setTimeout(() => {
                segment.color = p.random() > 0.5 ? '#9b87f5' : '#7E69AB';
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
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: isRTL
            ? 'linear-gradient(270deg, rgba(26, 32, 44, 0.4) 0%, rgba(26, 32, 44, 0.7) 50%, rgba(26, 32, 44, 1) 100%)'
            : 'linear-gradient(90deg, rgba(26, 32, 44, 1) 0%, rgba(26, 32, 44, 0.7) 50%, rgba(26, 32, 44, 0.4) 100%)',
        }}
      />
      <GradientOverlay />
    </div>
  );
};