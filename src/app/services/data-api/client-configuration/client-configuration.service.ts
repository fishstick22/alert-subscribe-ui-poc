import { Injectable, Inject }     from '@angular/core';
import { Headers, Http }          from '@angular/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { ClientConfiguration }    from 'app/model/client-configuration';


@Injectable()
export class ClientConfigurationService {

  private clientConfigurations: ClientConfiguration[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private clientConfigApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) {
    this.clientConfigApiEndpoint = this.config.apiEndpoint + 'api/clientconfiguration';  // URL to web api
  }

  async getClientConfigurationsThruApi(): Promise<ClientConfiguration[]> {
    try {
      const response = await this.http.get(this.clientConfigApiEndpoint).toPromise();
      return response.json() as ClientConfiguration[];
    } catch (error) {
      this.handleError(error);
    }
  }

  async createClientConfigurationThruApi(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    try {
      const response = await this.http.post(
        this.clientConfigApiEndpoint,
        JSON.stringify(clientConfiguration),
        {headers: this.headers}
      ).toPromise();
      return response.json() as ClientConfiguration;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateClientConfigurationThruApi(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    try {
      const url = `${this.clientConfigApiEndpoint}/${clientConfiguration.id}`;
      const response = await this.http.put(url, JSON.stringify(clientConfiguration), {headers: this.headers}).toPromise();
      return response.json() as ClientConfiguration;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
