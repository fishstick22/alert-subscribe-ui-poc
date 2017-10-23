import { Injectable, Inject }    from '@angular/core';
import { Headers, Http }         from '@angular/http';

import { APP_CONFIG }            from '../app.config'
import { IAppConfig }            from '../iapp-config'

import 'rxjs/add/operator/toPromise';

import { Program } from './../model/program';

@Injectable()
export class ProgramService {

  private programs: Program[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private progApiEndpoint;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { 
    this.progApiEndpoint = this.config.apiEndpoint + 'api/program';  // URL to web api
  }

  public getPrograms(): Promise<Program[]> {
    return new Promise((resolve, reject) => {
      if(this.programs) {
        resolve (this.programs);
      } else {  
        this.getProgramsThruApi()
          .then(programs => {
            console.log(programs)
            this.programs = programs;
            console.log(this.programs.length);
            resolve (this.programs); 
          }
        ).catch(this.handleError);
      }
      //reject();// not sure how this is reached, if API server is down?           
    });

  }

  private getProgramsThruApi(): Promise<Program[]> {
    console.log('ProgramService getProgramsThruApi...');
    return this.http
        .get(this.progApiEndpoint)
        .toPromise()
        .then(response => {
          console.log("service response text " + response.statusText);
          console.log("service response data " + response.json());
          console.log("service response status " + response.status);
          //return response.json().data as Communication[]
          return response.json() as Program[]
        })
        .catch(this.handleError);
  }

  public createProgram(program: Program): Promise<Program> {
    return new Promise((resolve, reject) => {
      if(this.programs) {
        this.createProgramThruApi(program)
          .then(program => {
            console.log('createProgram: ', program);
            this.insertProgram(program);
            resolve (program); 
        }).catch(this.handleError);
      } else { reject () }
           
    });
  }

  private insertProgram(program: Program): void {
    this.programs.push(program);
  }

  private createProgramThruApi(program: Program): Promise<Program> {
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

  public updateProgram(program: Program): Promise<Program> {
    return new Promise((resolve, reject) => {
      if(this.programs) {
        this.updateProgramThruApi(program)
          .then(program => {
            console.log('updateProgram: ', program);
            resolve (program); 
        }).catch(this.handleError);
      } else { reject () }
           
    });
  }

  private updateProgramThruApi(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    return this.http
      .put(url, JSON.stringify(program), {headers: this.headers})
      .toPromise()
      .then(() => program)
      .catch(this.handleError);
  }

  public deleteProgram(program: Program): Promise<Program> {
    return new Promise((resolve, reject) => {
      if(this.programs) {
        this.deleteProgramThruApi(program)
          .then(result => {
            console.log('deleteProgram: ', program);
            this.removeProgram(program);
            program = null;
            resolve (null); 
        }).catch(this.handleError);
      } else { reject () }
           
    });
  }

  private removeProgram(program: Program): void {
    // this broke my implementation of using the array from the components by reference
    //return this.programs.filter(p => p.id !== program.id);
    // DUH, that creates another object
    let index = this.programs.indexOf(program);
    if(index > -1){
      this.programs.splice(index, 1);
    }
  }

  private deleteProgramThruApi(program: Program): Promise<Program> {
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
