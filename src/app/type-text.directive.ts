import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  Input,
  input,
  OnChanges,
  OnInit,
  output, PLATFORM_ID, signal,
  SimpleChanges
} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Directive({
  selector: '[appTypeText]',
  standalone: true
})
export class TypeTextDirective  {
  platformId = inject(PLATFORM_ID);
  cdr = inject(ChangeDetectorRef);
  @Input({ required: true, alias: 'appTypeText' }) set _appTypeText(shouldTypeText: boolean) {
    this.shouldType.set(shouldTypeText);
    if(shouldTypeText && isPlatformBrowser(this.platformId)) {
      this.startTyping();
    }
  }

  shouldType = signal(false);
  textDelay = input<number>(20);
  textToType = input<string>('');
  typingDone = output<void>();
  isTyping = false;
  ngOnInit() {
    if(this.shouldType() &&  isPlatformBrowser(this.platformId)) {
      this.startTyping();
    }
  }
  text = '';

  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);
  startTyping() {
    if(this.isTyping)
      return;
    this.isTyping = true;
    this.text = '';
    let titleIteration = 0;
    const typingInterval = setInterval(() => {
      if (this.text !== this.textToType()) {
        this.text += this.textToType()?.[titleIteration];
        titleIteration++
        this.elementRef.nativeElement.innerText = this.text;
        return;
      }
      this.typingDone.emit();
      this.isTyping = false;
      clearInterval(typingInterval);
    }, this.textDelay());
  }
}
