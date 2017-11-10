import { SortableTableDirective } from './sortable-table.directive';
import { SortableColumnService }       from 'app/services/sortable-column.service';

describe('SortableTableDirective', () => {
  it('should create an instance', () => {
    const sortService: SortableColumnService = new SortableColumnService();
    const directive = new SortableTableDirective(sortService);
    expect(directive).toBeTruthy();
  });
});
