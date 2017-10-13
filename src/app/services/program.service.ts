import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Program } from './../model/program';

@Injectable()
export class ProgramService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private communicationUrl = 'http://localhost:8080/AlertSubscribeServicesPOC/service/program';  // URL to web api
  private programUrl = 'api/program';  // URL to web api

  constructor(private http: Http) { }

  getPrograms(): Promise<Program[]> {
    console.log('CommunicationService getCommunications...');
    return this.http.get(this.programUrl)
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
