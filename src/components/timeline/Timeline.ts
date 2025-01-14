import p5 from 'p5';
import { RevisionMarker } from './RevisionMarker';

interface Segment {
  x: number;
  width: number;
  color: string;
  hovered: boolean;
  label: string;
}

export class Timeline {
  x: number;
  y: number;
  width: number;
  speed: number;
  segments: Segment[];
  playheadX: number;
  p: p5;
  revisionMarkers: RevisionMarker[];
  
  constructor(p: p5, y: number) {
    this.p = p;
    this.y = y;
    this.x = -p.width * 0.2;
    this.width = p.width * 1.4;
    this.speed = p.random(0.5, 2);
    this.revisionMarkers = []; // Initialize the array before createSegments
    this.segments = this.createSegments();
    this.playheadX = 0;
  }
  
  createSegments() {
    const segments: Segment[] = [];
    let currentX = 0;
    
    while (currentX < this.width) {
      const segWidth = this.p.random(50, 150);
      segments.push({
        x: currentX,
        width: segWidth,
        color: this.p.random() > 0.7 ? 'rgba(155, 135, 245, 0.1)' : 'rgba(126, 105, 171, 0.1)', // Reduced opacity
        hovered: false,
        label: `Clip ${segments.length + 1}`
      });
      
      if (this.p.random() > 0.7) {
        this.revisionMarkers.push(new RevisionMarker(
          this.p,
          this.x + currentX + segWidth/2,
          this.y
        ));
      }
      
      currentX += segWidth + this.p.random(20, 40);
    }
    
    return segments;
  }
  
  update() {
    const targetSpeed = this.p.map(this.p.mouseX, 0, this.p.width, -2, 2);
    this.speed = this.p.lerp(this.speed, targetSpeed, 0.1);
    this.x += this.speed;
    
    if (this.x > this.p.width * 0.2) {
      this.x = -this.p.width * 0.2;
    } else if (this.x < -this.p.width * 0.2) {
      this.x = this.p.width * 0.2;
    }
    
    this.playheadX = (this.playheadX + 1) % this.p.width;
    
    this.revisionMarkers.forEach(marker => {
      const distance = this.p.abs(this.x + this.playheadX - marker.x);
      if (distance < 5) {
        marker.pulse();
      }
    });
  }
  
  draw() {
    this.segments.forEach((segment, index) => {
      const segX = this.x + segment.x;
      const mouseOver = this.p.mouseX > segX && 
                       this.p.mouseX < segX + segment.width && 
                       this.p.abs(this.p.mouseY - this.y) < 10;
      
      this.p.noStroke();
      this.p.fill(segment.color);
      const height = mouseOver ? 6 : 3;
      this.p.rect(segX, this.y - height/2, segment.width, height);
      
      if (mouseOver) {
        this.p.fill('rgba(255, 255, 255, 0.5)'); // Reduced text opacity
        this.p.textSize(12);
        this.p.textAlign(this.p.CENTER);
        this.p.text(segment.label, segX + segment.width/2, this.y - 15);
      }
    });
    
    this.p.stroke('rgba(214, 188, 250, 0.15)'); // Reduced playhead opacity
    this.p.strokeWeight(2);
    this.p.line(this.x + this.playheadX, this.y - 15, this.x + this.playheadX, this.y + 15);
    
    this.revisionMarkers.forEach(marker => marker.draw());
  }
}