import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG }            from '../app.config'
import { IAppConfig }            from '../iapp-config'

import 'rxjs/add/operator/toPromise';

//import { Program } from './../model/program';
import { ProgramConfiguration } from './../model/program-configuration';

@Injectable()
export class ProgramConfigurationService {

  private programConfigurations: ProgramConfiguration[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private progConfigApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { 
    this.progConfigApiEndpoint = this.config.apiEndpoint + 'api/programconfiguration';  // URL to web api
  }

  public getProgramConfigurations(): Promise<ProgramConfiguration[]> {
    return new Promise((resolve, reject) => {
      if(this.programConfigurations) {
        resolve (this.programConfigurations);
      } else {  
        this.getProgramConfigurationsThruApi()
          .then(programConfigurations => {
            console.log(programConfigurations)
            this.programConfigurations = programConfigurations;
            console.log(this.programConfigurations.length);
            resolve (this.programConfigurations); 
          }
        ).catch(this.handleError);
      }
      //reject();// not sure how this is reached, if API server is down?           
    });

  }

  private getProgramConfigurationsThruApi(): Promise<ProgramConfiguration[]> {
    console.log('CommunicationService getCommunications...');
    return this.http
        .get(this.progConfigApiEndpoint)
        .toPromise()
        .then(response => {
          console.log("service response text " + response.statusText);
          console.log("service response data " + response.json());
          console.log("service response status " + response.status);
          //return response.json().data as Communication[]
          return response.json() as ProgramConfiguration[]
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
