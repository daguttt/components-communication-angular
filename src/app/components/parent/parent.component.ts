import { Component, OnInit } from "@angular/core";
import { generateRandomNumber } from "src/app/shared/generateRandomNumber";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  numberToChild: number | null = null;
  numberToGrandChild: number | null = null;

  numberFromChild: number | null = null;
  numberFromGrandChild: number | null = null;

  constructor() {}

  ngOnInit() {}

  onChildMsg(msg: string): void {}

  sendRandomNumberToChild() {
    this.numberToChild = generateRandomNumber();
  }

  sendRandomNumberToGrandChild() {
    this.numberToGrandChild = generateRandomNumber();
  }

  onNumberFromChild(num: number) {
    this.numberFromChild = num;
  }

  onNumberFromGrandChild(num: number) {
    this.numberFromGrandChild = num;
  }
}
