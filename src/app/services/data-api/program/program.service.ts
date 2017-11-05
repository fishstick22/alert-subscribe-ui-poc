import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { Program } from 'app/model/program';

@Injectable()
export class ProgramService {

  private programs: Program[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private progApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) {
    this.progApiEndpoint = this.config.apiEndpoint + 'api/program';  // URL to web api
  }

  async getProgramsThruApi(): Promise<Program[]> {
    try {
      const response = await this.http.get(this.progApiEndpoint).toPromise();
      return response.json() as Program[];
    } catch (error) {
      this.handleError(error);
    }
  }

  async createProgramThruApi(program: Program): Promise<Program> {
    try {
      const response = await this.http.post(this.progApiEndpoint, JSON.stringify(program), {headers: this.headers}).toPromise();
      try {
        return response.json() as Program;
      } catch (error) {
        // some reason spring is returning only headers
        // if (response.url) {
        //  console.log('createProgramThruApi: ', response.url)
        // }
        return program;
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateProgramThruApi(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    try {
      const response = await this.http.put(url, JSON.stringify(program), {headers: this.headers}).toPromise();
      return response.json() as Program;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteProgramThruApi(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    try {
      const response = await this.http.delete(url, {headers: this.headers}).toPromise();
      return response.json() as Program;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
