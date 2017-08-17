import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {
  ApiService,
  ApiRequestParameter,
  ApiServiceResponse,
  TenderTask
} from '../../core';
import {
  reviverParser
} from '../../utilities';

@Injectable()
export class TendersService {

  constructor(private _apiService: ApiService) {
    // Initialize Member Variables
  }

  /**
   * Get all the tender list from the API
   *
   * `@Note` This will return an observable,
   * so you must subscribe to it before you will get the data
   */
  public getTenders(): Observable<TenderTask[]> {
    let apiRequestParameter: ApiRequestParameter = new ApiRequestParameter();
    apiRequestParameter.endPoint = '/tenders';

    return this._apiService.get(apiRequestParameter)
      .map((response) => {
        let tendersResponse: ApiServiceResponse<TenderTask[]>;
        tendersResponse = JSON.parse(response.text(),
          reviverParser) as ApiServiceResponse<TenderTask[]>;
        return tendersResponse.content;
      });
  }

  private _handleServerError(error: Response | any) {
    let mcsApiErrorResponse: ApiServiceResponse<any>;

    if (error instanceof Response) {
      mcsApiErrorResponse = new ApiServiceResponse<any>();
      mcsApiErrorResponse.errorMessage = error.statusText;
      mcsApiErrorResponse.statusCode = error.status;
    } else {
      mcsApiErrorResponse = error;
    }

    return Observable.throw(mcsApiErrorResponse);
  }
}
