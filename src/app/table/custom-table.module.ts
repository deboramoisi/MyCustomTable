import { CommonModule, CurrencyPipe, DatePipe, PercentPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomTableComponent } from "./custom-table/custom-table.component";
import { FormatCellPipe } from "./format-cell.pipe";
import { StyleCellDirective } from "./style-cell.directive";
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    declarations: [
        CustomTableComponent,
        FormatCellPipe,
        StyleCellDirective,
        PaginationComponent,
      ],
      imports: [ CommonModule ],
      exports: [ 
        CustomTableComponent,
        PaginationComponent
      ],
      providers: [ CurrencyPipe, DatePipe, PercentPipe ],
})
export class CustomTableModule {}