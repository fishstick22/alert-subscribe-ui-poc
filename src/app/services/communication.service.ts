import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG }            from '../app.config'
import { IAppConfig }            from '../iapp-config'

import 'rxjs/add/operator/toPromise';
;

import { Communication } from './../model/communication';

@Injectable()
export class CommunicationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private commApiEndpoint;


  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { 
    this.commApiEndpoint = this.config.apiEndpoint + 'api/communication';  // URL to web api
  }

  // getCommunications(): Promise<Communication[]> {
  //   console.log('CommunicationService getCommunications...', );
  //   return this.http.get(this.commApiEndpoint)
  //              .toPromise()
  //              .then(
  //                response => {
  //                  console.log("service response text " + response.statusText);
  //                  console.log("service response data " + response.json());
  //                  console.log("service response status " + response.status);
  //                  //return response.json().data as Communication[]
  //                  return response.json() as Communication[]
  //                }
  //               )
  //              .catch(this.handleError);
  // }
  async getCommunications(): Promise<Communication[]> {
    console.log('CommunicationService getCommunications...', );
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
