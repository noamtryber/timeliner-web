import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface Segment {
  x: number;
  width: number;
  color: string;
  hovered: boolean;
  label: string;
}

interface RevisionMarker {
  x: number;
  y: number;
  size: number;
  alpha: number;
  pulseSize: number;
  draw: () => void;
  pulse: () => void;
}

interface Timeline {
  x: number;
  y: number;
  width: number;
  speed: number;
  segments: Segment[];
  playheadX: number;
  update: () => void;
  draw: () => void;
}

export const TimelineBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const timelines: Timeline[] = [];
      const numTimelines = 12;
      const revisionMarkers: RevisionMarker[] = [];
      let mouseTrailX = 0;
      let mouseTrailY = 0;
      
      class RevisionMarker {
        x: number;
        y: number;
        size: number;
        alpha: number;
        pulseSize: number;
        
        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.size = 8;
          this.alpha = 255;
          this.pulseSize = 0;
        }
        
        draw() {
          p.noStroke();
          // Inner circle
          p.fill(214, 188, 250, this.alpha); // accent color
          p.circle(this.x, this.y, this.size);
          
          // Pulse effect
          if (this.pulseSize > 0) {
            p.fill(214, 188, 250, this.alpha * (1 - this.pulseSize/30));
            p.circle(this.x, this.y, this.size + this.pulseSize);
            this.pulseSize = Math.max(0, this.pulseSize - 0.5);
          }
        }
        
        pulse() {
          this.pulseSize = 30;
        }
      }
      
      class Timeline {
        x: number;
        y: number;
        width: number;
        speed: number;
        segments: Segment[];
        playheadX: number;
        
        constructor(y: number) {
          this.y = y;
          this.x = -p.width * 0.2;
          this.width = p.width * 1.4;
          this.speed = p.random(0.5, 2);
          this.segments = this.createSegments();
          this.playheadX = 0;
        }
        
        createSegments() {
          const segments: Segment[] = [];
          let currentX = 0;
          
          while (currentX < this.width) {
            const segWidth = p.random(50, 150);
            segments.push({
              x: currentX,
              width: segWidth,
              color: p.random() > 0.7 ? '#9b87f5' : '#7E69AB', // primary and secondary colors
              hovered: false,
              label: `Clip ${segments.length + 1}`
            });
            
            // Add revision markers with 30% probability
            if (p.random() > 0.7) {
              revisionMarkers.push(new RevisionMarker(
                this.x + currentX + segWidth/2,
                this.y
              ));
            }
            
            currentX += segWidth + p.random(20, 40);
          }
          
          return segments;
        }
        
        update() {
          // Update position based on mouse movement
          const targetSpeed = p.map(p.mouseX, 0, p.width, -2, 2);
          this.speed = p.lerp(this.speed, targetSpeed, 0.1);
          this.x += this.speed;
          
          // Loop the timeline
          if (this.x > p.width * 0.2) {
            this.x = -p.width * 0.2;
          } else if (this.x < -p.width * 0.2) {
            this.x = p.width * 0.2;
          }
          
          // Update playhead
          this.playheadX = (this.playheadX + 1) % p.width;
          
          // Check for playhead intersection with revision markers
          revisionMarkers.forEach(marker => {
            const distance = p.abs(this.x + this.playheadX - marker.x);
            if (distance < 5) {
              marker.pulse();
            }
          });
        }
        
        draw() {
          // Draw segments
          this.segments.forEach((segment, index) => {
            const segX = this.x + segment.x;
            const mouseOver = p.mouseX > segX && 
                            p.mouseX < segX + segment.width && 
                            p.abs(p.mouseY - this.y) < 10;
            
            // Segment background
            p.noStroke();
            p.fill(segment.color);
            const height = mouseOver ? 6 : 3;
            p.rect(segX, this.y - height/2, segment.width, height);
            
            // Tooltip on hover
            if (mouseOver) {
              p.fill(255);
              p.textSize(12);
              p.textAlign(p.CENTER);
              p.text(segment.label, segX + segment.width/2, this.y - 15);
            }
          });
          
          // Draw playhead
          p.stroke('#D6BCFA'); // accent color
          p.strokeWeight(2);
          p.line(this.x + this.playheadX, this.y - 15, this.x + this.playheadX, this.y + 15);
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
        
        // Smooth mouse trail
        mouseTrailX = p.lerp(mouseTrailX, p.mouseX, 0.1);
        mouseTrailY = p.lerp(mouseTrailY, p.mouseY, 0.1);
        
        // Draw mouse trail
        p.noFill();
        p.stroke('#D6BCFA');
        p.strokeWeight(1);
        p.circle(mouseTrailX, mouseTrailY, 30);
        
        // Update and draw timelines
        timelines.forEach(timeline => {
          timeline.update();
          timeline.draw();
        });
        
        // Draw revision markers
        revisionMarkers.forEach(marker => marker.draw());
      };
      
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
      
      // Handle clicks
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
          background: 'linear-gradient(90deg, rgba(26, 31, 44, 0.05) 0%, rgba(26, 31, 44, 0.25) 50%, rgba(26, 31, 44, 0.5) 100%)'
        }}
      />
    </div>
  );
};