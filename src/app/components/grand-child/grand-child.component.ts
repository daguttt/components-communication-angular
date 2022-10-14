import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { generateRandomNumber } from 'src/app/shared/generate-random-number';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
})
export class GrandChildComponent implements OnInit {
  @Input() numbersFromParent!: number[];

  @Output() onNumberToParent: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  sendRandomNumberToParent() {
    this.onNumberToParent.emit(generateRandomNumber());
  }
}
