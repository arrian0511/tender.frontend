import { DataSource } from '@angular/cdk';
import { TendersService } from '../tenders.service';

/**
 * Tenders class datasource to bind in the table
 */
export class TendersDatasource extends DataSource<any> {
  constructor(private _tendersService: TendersService) {
    super();
  }

  /**
   * This will invoke everytime the table is initialized
   */
  public connect() {
    return this._tendersService.getTenders();
  }

  /**
   * This will invoke everytime the table component is destroyed
   */
  public disconnect() {
    // Release objects
  }
}
