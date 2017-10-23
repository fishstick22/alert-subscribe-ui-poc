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

  public async getProgramConfigurations(): Promise<ProgramConfiguration[]> {
    if(this.programConfigurations) {
      return this.programConfigurations;
    } else {
      this.programConfigurations = await this.getProgramConfigurationsThruApi();
      return this.programConfigurations;
    }
  }

  private async getProgramConfigurationsThruApi(): Promise<ProgramConfiguration[]> {
    try {
      const response = await this.http.get(this.progConfigApiEndpoint).toPromise();
      return response.json() as ProgramConfiguration[];
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
