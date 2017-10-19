import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG }            from '../app.config'
import { IAppConfig }            from '../iapp-config'

import 'rxjs/add/operator/toPromise';

import { Program } from './../model/program';

@Injectable()
export class ProgramService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private progApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { 
    this.progApiEndpoint = this.config.apiEndpoint + 'api/program';  // URL to web api
  }

  getPrograms(): Promise<Program[]> {
    console.log('CommunicationService getCommunications...');
    return this.http.get(this.progApiEndpoint)
               .toPromise()
               .then(
                 response => {
                   console.log("service response text " + response.statusText);
                   console.log("service response data " + response.json());
                   console.log("service response status " + response.status);
                   //return response.json().data as Communication[]
                   return response.json() as Program[]
                 }
                )
               .catch(this.handleError);
  }

  create(program: Program): Promise<Program> {
    const prgJson = JSON.stringify(program);
    console.log('ProgramService create: ', prgJson);
    return this.http
      .post(this.progApiEndpoint, prgJson, {headers: this.headers})
      .toPromise()
      .then(
        response => {
          console.log("service response text " + response.statusText);
          //console.log("service response data " + response.json());
          console.log("service response status " + response.status);
          // REST not returning the created object
          //return response.json() as Program
          return program; // this only works here because the server does not assign the ID
        })
      .catch(this.handleError);
  }

  update(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    return this.http
      .put(url, JSON.stringify(program), {headers: this.headers})
      .toPromise()
      .then(() => program)
      .catch(this.handleError);
  }

  delete(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
