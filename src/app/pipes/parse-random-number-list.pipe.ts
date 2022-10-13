import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "parseRandomNumberList",
})
export class ParseRandomNumberList implements PipeTransform {
  transform(randomNumberList: number[]): string {
    if (!randomNumberList.length) return "Nothing for now";
    return randomNumberList.join(", ");
  }
}
