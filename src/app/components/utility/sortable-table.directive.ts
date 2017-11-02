import { Directive, OnInit, EventEmitter,
         Output, OnDestroy, Input }         from '@angular/core';

import { Subscription }                     from 'rxjs/Subscription';

import { SortableColumnService }            from '../../services/sortable-column.service';

// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/

@Directive({
  selector: '[sortable-table]'
})
export class SortableTableDirective implements OnInit, OnDestroy {

    constructor(private sortService: SortableColumnService) {}

      @Output()
      sorted = new EventEmitter();

      private columnSortedSubscription: Subscription;

      ngOnInit() {
          this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
              this.sorted.emit(event);
          });
      }

      ngOnDestroy() {
          this.columnSortedSubscription.unsubscribe();
      }

}
