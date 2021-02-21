import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchValue = '';
  debouncer: Subject<string> = new Subject();

  constructor() {
    this.debouncer.pipe(debounceTime(200)).subscribe((val) => {
      this.search.emit(val);
      this.searchValue = val;
    });
  }

  debounce(val): void {
    this.debouncer.next(val);
  }
}
