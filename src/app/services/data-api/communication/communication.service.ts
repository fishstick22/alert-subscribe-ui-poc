import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { Communication } from 'app/model/communication';

@Injectable()
export class CommunicationService {

  private communications: Communication[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private commApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) {
    this.commApiEndpoint = this.config.apiEndpoint + 'api/communication';  // URL to web api
  }

  async getCommunicationsThruApi(): Promise<Communication[]> {
    try {
      const response = await this.http.get(this.commApiEndpoint).toPromise();
      return response.json() as Communication[];
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
