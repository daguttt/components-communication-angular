import { Pipe, PipeTransform } from '@angular/core';
import { isPrimeNumber } from '../shared/is-prime-number';

@Pipe({
  name: 'isLastNumberPrime',
  pure: false,
})
export class IsLastNumberPrime implements PipeTransform {
  transform(numberList: number[]): string {
    const lastNumberInList = numberList[numberList.length - 1];
    if (!lastNumberInList) return 'Nothing for now';

    return isPrimeNumber(lastNumberInList)
      ? `(${lastNumberInList}) Prime`
      : `(${lastNumberInList}) Not Prime`;
  }
}
