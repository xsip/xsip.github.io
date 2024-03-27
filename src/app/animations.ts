import { animate, style, transition, trigger } from '@angular/animations';

export function fadeInOut(fadeInTime = '1s', fadeOutTime = '1s') {
  return trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(fadeOutTime + ' ease-out', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(fadeInTime + ' ease-in', style({ opacity: 0 })),
    ]),
  ]);
}
export function bounceIn(fadeInTime = '1s', fadeOutTime = '1s') {
  return trigger('bounceIn', [
    transition(':enter', [
      style({ scale: 0 }),
      animate(fadeOutTime + ' ease-out', style({ scale: 1 })),
    ]),
    transition(':leave', [
      style({ scale: 1 }),
      animate(fadeInTime + ' ease-in', style({ scale: 0 })),
    ]),
  ]);
}
