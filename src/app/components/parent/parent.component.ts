import { Component, OnInit } from "@angular/core";
import { generateRandomNumber } from "src/app/shared/generateRandomNumber";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  numbersToChild: number[] = [];
  numbersToGrandChild: number[] = [];

  numbersFromChild: number[] = [];
  numbersFromGrandChild: number[] = [];

  constructor() {}

  ngOnInit() {}

  sendRandomNumberToChild(): number[] | void {
    if (!this.numbersToChild.length)
      return (this.numbersToChild = [generateRandomNumber()]);

    this.numbersToChild = [...this.numbersToChild, generateRandomNumber()];
  }

  sendRandomNumberToGrandChild(): number[] | void {
    if (!this.numbersToGrandChild.length)
      return (this.numbersToGrandChild = [generateRandomNumber()]);

    this.numbersToGrandChild = [
      ...this.numbersToGrandChild,
      generateRandomNumber(),
    ];
  }

  onNumberFromChild(num: number): number[] | void {
    if (!this.numbersFromChild.length) return (this.numbersFromChild = [num]);

    this.numbersFromChild = [...this.numbersFromChild, num];
  }

  onNumberFromGrandChild(num: number): number[] | void {
    if (!this.numbersFromGrandChild.length)
      return (this.numbersFromGrandChild = [num]);

    this.numbersFromGrandChild = [...this.numbersFromGrandChild, num];
  }
}
