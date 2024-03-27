import {AfterContentInit, Directive, ElementRef, inject, Input, OnInit, PLATFORM_ID,} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {isPlatformBrowser} from '@angular/common';

@Directive({
  selector: '[appConnectingDots]',

  standalone: true,
})
export class ConnectingDotsDirective implements OnInit, AfterContentInit {
  platformId = inject(PLATFORM_ID);
  canvas!: HTMLCanvasElement;
  ctx: any;
  stars: any[] = []; // Array that contains the stars
  FPS = 60; // Frames per second
  x = 100; // Number of stars
  mouse: { x: number; y: number } = {
    x: 0,
    y: 0,
  }; // mouse location
  randomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  randomByte = () => this.randomNumber(0, 255);
  randomPercent = () => (this.randomNumber(50, 100) * 0.01).toFixed(2);
  randomCssRgba = () =>
    `rgba(${[
      this.randomByte(),
      this.randomByte(),
      this.randomByte(),
      this.randomPercent(),
    ].join(',')})`;
  @Input() position = 'fixed';
  constructor(
    private deviceService: DeviceDetectorService,
    private el: ElementRef<HTMLElement>
  ) {}
  ngOnInit() {
    if (this.deviceService.isMobile()) {
      this.x = 50;
    }
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.lineColor = this.randomCssRgba();
      }, 5000);
      this.canvas = document.createElement('canvas') as HTMLCanvasElement;
      this.canvas.className =
        this.position + ' z-[-1] top-0 left-0 w-full h-full';
      this.canvas.id = Math.floor(Math.random() * (3 - 1 + 1) + 1) + '';
      this.el.nativeElement.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
    }
  }
  randomColors: Record<number, string> = {};
  lineColor = this.randomCssRgba();
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.globalCompositeOperation = 'lighter';

    for (let i = 0, x = this.stars.length; i < x; i++) {
      const s = this.stars[i];

      if (!this.randomColors[i]) this.randomColors[i] = this.randomCssRgba();
      this.ctx.fillStyle = this.randomColors[i]; // 'rgba(35,35,35,1)';
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.fillStyle = 'rgba(35,35,35,0)';
      this.ctx.stroke();
    }

    this.ctx.beginPath();
    for (let i = 0, x = this.stars.length; i < x; i++) {
      const starI = this.stars[i];
      this.ctx.moveTo(starI.x, starI.y);
      if (this.distance(this.mouse, starI) < 150)
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
      for (let j = 0, x = this.stars.length; j < x; j++) {
        const starII = this.stars[j];
        if (this.distance(starI, starII) < 150) {
          //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
          this.ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    this.ctx.lineWidth = 0.15;
    this.ctx.strokeStyle = this.lineColor; // 'rgba(35,35,35,0.6)';
    this.ctx.stroke();
  }

  distance(point1: any, point2: any) {
    let xs = 0;
    let ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
  }

  // Update star locations

  update() {
    for (let i = 0, x = this.stars.length; i < x; i++) {
      const s = this.stars[i];

      s.x += s.vx / this.FPS;
      s.y += s.vy / this.FPS;

      if (s.x < 0 || s.x > this.canvas.width) s.vx = -s.vx;
      if (s.y < 0 || s.y > this.canvas.height) s.vy = -s.vy;
    }
  }

  // Update and draw

  tick = () => {
    if (this && this.draw != undefined) {
      this.draw();
      this.update();
    }
    requestAnimationFrame(this.tick);
  };

  ngAfterContentInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      for (let i = 0; i < this.x; i++) {
        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.floor(Math.random() * (3 - 1 + 1) + 1), // Math.random() * 1 + 1,
          vx: Math.floor(Math.random() * 50) - 25,
          vy: Math.floor(Math.random() * 50) - 25,
        });
      }
      document.body.addEventListener('mousemove', (e: any) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });
      this.tick();
    }
  }
}
