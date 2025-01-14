import p5 from 'p5';

export class RevisionMarker {
  x: number;
  y: number;
  size: number;
  alpha: number;
  pulseSize: number;
  p: p5;
  
  constructor(p: p5, x: number, y: number) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.size = 8;
    this.alpha = 255;
    this.pulseSize = 0;
  }
  
  draw() {
    this.p.noStroke();
    // Inner circle
    this.p.fill(214, 188, 250, this.alpha); // accent color
    this.p.circle(this.x, this.y, this.size);
    
    // Pulse effect
    if (this.pulseSize > 0) {
      this.p.fill(214, 188, 250, this.alpha * (1 - this.pulseSize/30));
      this.p.circle(this.x, this.y, this.size + this.pulseSize);
      this.pulseSize = Math.max(0, this.pulseSize - 0.5);
    }
  }
  
  pulse() {
    this.pulseSize = 30;
  }
}