import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export const ThreeDSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredClip, setHoveredClip] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const clips = [
        { length: 120, color: '#9b87f5' },  // Primary
        { length: 80, color: '#7E69AB' },   // Secondary
        { length: 100, color: '#D6BCFA' },  // Accent
        { length: 90, color: '#9b87f5' },   // Primary
        { length: 110, color: '#7E69AB' },  // Secondary
      ];
      
      const revisionMarkers = [30, 120, 200, 280, 350];
      let playheadPos = 0;
      let timelineOffset = 0;
      let mouseXOffset = 0;
      
      p.setup = () => {
        const canvas = p.createCanvas(containerRef.current!.offsetWidth, containerRef.current!.offsetHeight, p.WEBGL);
        canvas.parent(containerRef.current!);
      };
      
      const drawTimeline = () => {
        p.push();
        p.translate(-p.width/2, 0);
        
        let xPos = timelineOffset;
        clips.forEach((clip, index) => {
          p.fill(clip.color);
          p.noStroke();
          
          // Draw clip segment
          p.rect(xPos, -20, clip.length, 40);
          
          // Hover effect
          if (p.mouseX > xPos + p.width/2 && p.mouseX < xPos + clip.length + p.width/2 && 
              p.mouseY > p.height/2 - 20 && p.mouseY < p.height/2 + 20) {
            p.fill(255, 100);
            p.rect(xPos, -20, clip.length, 40);
            setHoveredClip(index);
          }
          
          xPos += clip.length;
        });
        p.pop();
      };
      
      const drawPlayhead = () => {
        p.push();
        p.stroke('#FFFFFF');
        p.strokeWeight(2);
        p.line(0, -30, 0, 30);
        
        // Playhead glow effect
        p.noFill();
        p.stroke(255, 100);
        p.strokeWeight(4);
        p.line(0, -30, 0, 30);
        p.pop();
      };
      
      const drawRevisionMarkers = () => {
        p.push();
        p.translate(-p.width/2, 0);
        
        revisionMarkers.forEach(pos => {
          const adjustedPos = pos + timelineOffset;
          
          // Check if playhead is near marker
          const distToPlayhead = Math.abs(adjustedPos - (p.width/2 - timelineOffset));
          const glowIntensity = p.map(distToPlayhead, 0, 30, 255, 0);
          
          if (glowIntensity > 0) {
            // Glow effect
            p.fill(155, 135, 245, glowIntensity);
            p.noStroke();
            p.circle(adjustedPos, 0, 20);
          }
          
          // Marker
          p.fill('#D6BCFA');
          p.noStroke();
          p.circle(adjustedPos, 0, 10);
        });
        p.pop();
      };
      
      p.draw = () => {
        p.clear();
        p.background('rgba(26, 31, 44, 0.2)');
        
        // Center everything
        p.translate(p.width/2, p.height/2);
        
        // Update timeline offset based on mouse position
        const targetOffset = (p.mouseX - p.width/2) * 0.1;
        mouseXOffset += (targetOffset - mouseXOffset) * 0.05;
        timelineOffset = mouseXOffset;
        
        // Draw timeline elements
        drawTimeline();
        drawRevisionMarkers();
        drawPlayhead();
        
        // Update playhead
        playheadPos += 1;
        if (playheadPos > p.width) {
          playheadPos = 0;
        }
      };
      
      p.windowResized = () => {
        if (!containerRef.current) return;
        p.resizeCanvas(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      };
      
      // Handle click events
      p.mouseClicked = () => {
        const mouseXRelative = p.mouseX - p.width/2;
        const mouseYRelative = p.mouseY - p.height/2;
        
        // Check if click is within timeline bounds
        if (mouseYRelative > -20 && mouseYRelative < 20) {
          let xPos = timelineOffset;
          clips.forEach((clip, index) => {
            if (mouseXRelative > xPos && mouseXRelative < xPos + clip.length) {
              // Temporarily change clip color
              const originalColor = clip.color;
              clip.color = '#FFFFFF';
              setTimeout(() => {
                clip.color = originalColor;
              }, 200);
            }
            xPos += clip.length;
          });
        }
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <TooltipProvider>
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div ref={containerRef} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="container relative z-10 mx-auto px-4 py-24 flex items-center justify-center h-full">
          {hoveredClip !== null && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute inset-0" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Clip {hoveredClip + 1}</p>
              </TooltipContent>
            </Tooltip>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text">
            Experience the Future of Video Management
          </h2>
        </div>
      </section>
    </TooltipProvider>
  );
};