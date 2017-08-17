import {
  Component,
  OnInit
} from '@angular/core';
import { TendersService } from './tenders.service';
import { TendersDatasource } from './datasources';

@Component({
  selector: 'feature-tenders',
  templateUrl: './tenders.component.html',
  styles: [require('./tenders.component.scss')]
})

export class TendersComponent implements OnInit {
  public dataColumns: string[];
  public dataSource: TendersDatasource | null;

  public constructor(private _tendersService: TendersService) {
    /// Initialize Member Variables
  }

  public ngOnInit() {
    /// Set Data Columns
    this._setDataColumns();

    /// Initialize datasources
    setTimeout(() => {
      this.dataSource = new TendersDatasource(this._tendersService);
    }, 100);
  }

  private _setDataColumns(): void {
    this.dataColumns = [
      'requirements',
      'startDate',
      'endDate',
      'currentBid',
      'finalBid',
      'action'
    ];
  }
}
