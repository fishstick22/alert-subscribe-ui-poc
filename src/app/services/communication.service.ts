import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG }            from '../app.config'
import { IAppConfig }            from '../iapp-config'

import 'rxjs/add/operator/toPromise';

import { Communication } from './../model/communication';

@Injectable()
export class CommunicationService {

  private communications: Communication[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private commApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { 
    this.commApiEndpoint = this.config.apiEndpoint + 'api/communication';  // URL to web api
  }

  public async getCommunications(): Promise<Communication[]> {
    if (this.communications) {
      return this.communications;
    } else {
      this.communications = await this.getCommunicationsThruApi();
      return this.removeProgramConfigurationCruft(this.communications);
    }
  }

  private removeProgramConfigurationCruft(communications: Communication[]): Communication[] {
    // some reason spring rest is giving empty array objects of programConfiguration property
    // get rid of them all
    for (var i = 0, len = communications.length; i < len; i++) {
      if (communications[i].programConfiguration.length) {
        communications[i].programConfiguration = [];
      }
    }
    return communications;
  } 

  private async getCommunicationsThruApi(): Promise<Communication[]> {
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
