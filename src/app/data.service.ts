import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cachedData: string[] = ['apple', 'peer', 'orange', 'grapes'];
  private readonly dataSubject = new BehaviorSubject<string[]>(this.cachedData);
  data$ = this.dataSubject.asObservable();
  filterData(val: any): void {
    const data = this.cachedData;
    this.dataSubject.next(data.filter((d) => d.indexOf(val) !== -1));
  }

  constructor() {}
}
