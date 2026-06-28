import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  @Input() value = 1;
  @Input() min = 0;
  @Input() max = 999;

  @Output() valueChange = new EventEmitter<number>();

  decrease(): void {
    if (this.value > this.min) {
      this.value--;
      this.valueChange.emit(this.value);
    }
  }

  increase(): void {
    if (this.value < this.max) {
      this.value++;
      this.valueChange.emit(this.value);
    }
  }
}