import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const TimelineBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const timelines: Timeline[] = [];
      const numTimelines = 15;
      
      class Timeline {
        x: number;
        y: number;
        width: number;
        speed: number;
        segments: { x: number; width: number; color: string }[];
        
        constructor(y: number) {
          this.y = y;
          this.x = -p.width * 0.2;
          this.width = p.width * 1.4;
          this.speed = p.random(0.5, 2);
          this.segments = this.createSegments();
        }
        
        createSegments() {
          const segments = [];
          let currentX = 0;
          
          while (currentX < this.width) {
            const segWidth = p.random(20, 100);
            segments.push({
              x: currentX,
              width: segWidth,
              color: p.random() > 0.7 ? '#9b87f5' : '#1A1F2C'
            });
            currentX += segWidth + p.random(10, 30);
          }
          
          return segments;
        }
        
        update() {
          this.x += this.speed;
          if (this.x > p.width * 0.2) {
            this.x = -p.width * 0.2;
          }
        }
        
        draw() {
          p.noStroke();
          this.segments.forEach(segment => {
            p.fill(segment.color);
            p.rect(this.x + segment.x, this.y, segment.width, 2);
          });
        }
      }
      
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(containerRef.current!);
        
        const spacing = p.height / (numTimelines + 1);
        for (let i = 0; i < numTimelines; i++) {
          timelines.push(new Timeline(spacing * (i + 1)));
        }
      };
      
      p.draw = () => {
        p.clear();
        p.background('rgba(26, 31, 44, 0.1)');
        
        timelines.forEach(timeline => {
          timeline.update();
          timeline.draw();
        });
      };
      
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch);
    return () => p5Instance.remove();
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};