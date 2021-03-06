import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DateService {

  constructor(private datePipe: DatePipe) { }

  public convertDateToStringDMY(date: Date): String {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}
