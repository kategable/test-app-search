import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent  {

  constructor() { }
  @Input() data: string[];
  trackByFn(value): string {
    return value;
  }
}
