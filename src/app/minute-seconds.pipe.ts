import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds',
})
export class MinuteSecondsPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0)
      return '00:00';

    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    const minutesOutput = minutes < 10 ? `0${minutes}`: minutes.toString();
    const secondsOutput = seconds < 10 ? `0${seconds}`: seconds.toString();

    const finatOutput = `${minutesOutput}:${secondsOutput}`;

    return finatOutput;
  }
}
