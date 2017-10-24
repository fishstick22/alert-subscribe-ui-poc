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

  public async getPrograms(): Promise<Program[]> {
    if(this.programs) {
      return this.programs;
    } else {
      this.programs = await this.getProgramsThruApi();
      return this.programs;
    }
  }

  private async getProgramsThruApi(): Promise<Program[]> {
    try {
      const response = await this.http.get(this.progApiEndpoint).toPromise();
      return response.json() as Program[];
    } catch (error) {
      this.handleError(error);
    }
  }

  public async createProgram(program: Program): Promise<Program> {
    await this.createProgramThruApi(program);
    this.insertProgram(program);
    return program;
  }

  private insertProgram(program: Program): void {
    this.programs.push(program);
  }

  private async createProgramThruApi(program: Program): Promise<Program> {
    try {
      const response = await this.http.post(this.progApiEndpoint, JSON.stringify(program), {headers: this.headers}).toPromise();
      return response.json() as Program;
    } catch (error) {
      this.handleError(error);
    }
    // const prgJson = JSON.stringify(program);
    // console.log('ProgramService create: ', prgJson);
    // return this.http
    //   .post(this.progApiEndpoint, prgJson, {headers: this.headers})
    //   .toPromise()
    //   .then(
    //     response => {
    //       console.log("service response text " + response.statusText);
    //       //console.log("service response data " + response.json());
    //       console.log("service response status " + response.status);
    //       // REST not returning the created object
    //       //return response.json() as Program
    //       return program; // this only works here because the server does not assign the ID
    //     })
    //   .catch(this.handleError);
  }

  public async updateProgram(program: Program): Promise<Program> {
    await this.updateProgramThruApi(program);
    return program;
  }

  private async updateProgramThruApi(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    try {
      const response = await this.http.put(url, JSON.stringify(program), {headers: this.headers}).toPromise();
      return response.json() as Program;
    } catch (error) {
      this.handleError(error);
    }
    // return this.http
    //   .put(url, JSON.stringify(program), {headers: this.headers})
    //   .toPromise()
    //   .then(() => program)
    //   .catch(this.handleError);
  }

  public async deleteProgram(program: Program): Promise<Program> {
    await this.deleteProgramThruApi(program);
    this.removeProgram(program);
    program = null;
    return program;
    // return new Promise((resolve, reject) => {
    //   if(this.programs) {
    //     this.deleteProgramThruApi(program)
    //       .then(result => {
    //         console.log('deleteProgram: ', program);
    //         this.removeProgram(program);
    //         program = null;
    //         resolve (null); 
    //     }).catch(this.handleError);
    //   } else { reject () }
           
    // });
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

  private async deleteProgramThruApi(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    try {
      const response = await this.http.delete(url, {headers: this.headers}).toPromise();
      return response.json() as Program;
    } catch (error) {
      this.handleError(error);
    }
    // return this.http
    //   .delete(url, {headers: this.headers})
    //   .toPromise()
    //   .then(() => null)
    //   .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
