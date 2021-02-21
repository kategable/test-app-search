import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filteredData$ = this.service.data$;
  constructor(private readonly service: DataService){

  }
  title = 'test-app';

  handleSearch(val): void {
    this.service.filterData(val);
  }
}
