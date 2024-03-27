import {Directive, ElementRef, inject, input, OnChanges, OnInit, output, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appTypeText]',
  standalone: true
})
export class TypeTextDirective implements OnInit, OnChanges {
  appTypeText = input<boolean>();
  textDelay = input<number>();
  textToType = input<number>();
  typingDone = output<void>();
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
