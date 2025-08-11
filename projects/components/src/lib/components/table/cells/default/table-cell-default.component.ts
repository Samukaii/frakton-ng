import { Component, input } from '@angular/core';
import { ToClassPipe } from '../../../../pipes/to-class.pipe';

@Component({
  selector: 'fkt-table-cell-default',
  imports: [ToClassPipe],
  templateUrl: './table-cell-default.component.html',
  styleUrl: './table-cell-default.component.scss'
})
export class TableCellDefaultComponent {
  classes = input<string[]>();
  value = input.required<string>();
}
