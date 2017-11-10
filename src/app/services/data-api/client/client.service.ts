import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { Client } from 'app/classes/model/client';


@Injectable()
export class ClientService {

  private clients: Client[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private clientApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) {
    this.clientApiEndpoint = this.config.apiEndpoint + 'api/client';  // URL to web api
  }

  async getClientsThruApi(): Promise<Client[]> {
    try {
      const response = await this.http.get(this.clientApiEndpoint).toPromise();
      return response.json() as Client[];
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
