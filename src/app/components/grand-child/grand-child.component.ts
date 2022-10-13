import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Relatives } from "src/app/interfaces/relatives.interface";
import { generateRandomNumber } from "src/app/shared/generateRandomNumber";

@Component({
  selector: "app-grand-child",
  templateUrl: "./grand-child.component.html",
  styleUrls: ["./grand-child.component.css"],
})
export class GrandChildComponent implements OnInit {
  @Input() numberFromParent: number | null;

  @Output() onNumberToParent: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  sendRandomNumberToParent() {
    this.onNumberToParent.emit(generateRandomNumber());
  }
}
