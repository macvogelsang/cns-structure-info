import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatId'})
export class FormatIdPipe implements PipeTransform {
  transform(value: string): string {
      if (!value) {
        return "No UBERON ID found"
      } else {
        return value;
      }
  }
}