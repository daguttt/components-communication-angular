import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { generateRandomNumber } from 'src/app/shared/generate-random-number';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() numbersFromParent!: number[];
  @Input() numbersToGrandChild!: number[];

  @Output() onNumberToParent: EventEmitter<number> = new EventEmitter();
  @Output() onGrandChildToParent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendRandomNumberToParent() {
    this.onNumberToParent.emit(generateRandomNumber());
  }

  sendGrandChildNumberToParent(num: number) {
    this.onGrandChildToParent.emit(num);
  }
}
