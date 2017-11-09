import { Injectable, Inject }     from '@angular/core';
import { Headers, Http }          from '@angular/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { ProgramConfiguration }   from 'app/classes/model/program-configuration';

@Injectable()
export class ProgramConfigurationService {

  private programConfigurations: ProgramConfiguration[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private progConfigApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) {
    this.progConfigApiEndpoint = this.config.apiEndpoint + 'api/programconfiguration';  // URL to web api
  }

  async getProgramConfigurationsThruApi(): Promise<ProgramConfiguration[]> {
    try {
      const response = await this.http.get(this.progConfigApiEndpoint).toPromise();
      return response.json() as ProgramConfiguration[];
    } catch (error) {
      this.handleError(error);
    }
  }

  async createProgramConfigurationThruApi(programConfiguration: ProgramConfiguration): Promise<ProgramConfiguration> {
    try {
      const response = await this.http.post(
        this.progConfigApiEndpoint,
        JSON.stringify(programConfiguration),
        {headers: this.headers}
      ).toPromise();
      return response.json() as ProgramConfiguration;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateProgramConfigurationThruApi(programConfiguration: ProgramConfiguration): Promise<ProgramConfiguration> {
    try {
      const url = `${this.progConfigApiEndpoint}/${programConfiguration.id}`;
      const response = await this.http.put(url, JSON.stringify(programConfiguration), {headers: this.headers}).toPromise();
      return response.json() as ProgramConfiguration;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
