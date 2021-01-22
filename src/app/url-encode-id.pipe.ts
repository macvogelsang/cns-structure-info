import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'urlEncodeId'})
export class UrlEncodeIdPipe implements PipeTransform {
  transform(value: string): string {
      return value.replace(":","_");
  }
}