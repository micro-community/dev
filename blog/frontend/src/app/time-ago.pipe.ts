import {Pipe, PipeTransform} from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    var d = new Date(Number(value) * 1000)
    console.log(d)
    return super.transform(d.toString());
  }
}