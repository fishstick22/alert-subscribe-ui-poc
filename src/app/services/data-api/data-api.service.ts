import { Injectable }                  from '@angular/core';

import { ClientService }               from 'app/services/data-api/client/client.service';
import { CommunicationService }        from 'app/services/data-api/communication/communication.service';
import { ProgramService }              from 'app/services/data-api/program/program.service';
import { ProgramConfigurationService } from 'app/services/data-api/program-configuration/program-configuration.service';

import { IProgramConfig }              from 'app/model/iprog-config';

import { Communication }               from 'app/model/communication';
import { Program }                     from 'app/model/program';
import { ProgramConfiguration }        from 'app/model/program-configuration';
import { Client }                      from 'app/model/client';

@Injectable()
export class DataApiService {

  communications: Communication[];
  programs: Program[];
  programConfigurations: ProgramConfiguration[];
  clients: Client[];

  constructor(
    private communicationService: CommunicationService,
    private programService: ProgramService,
    private programConfigurationService: ProgramConfigurationService,
    private clientService: ClientService
  ) { }

  public async getCommunications(): Promise<Communication[]> {
    if (this.communications) {
      return this.communications;
    } else {
      this.communications = await this.communicationService.getCommunicationsThruApi();
      return this.removeProgramConfigurationCruft(this.communications);
    }
  }

  public async getPrograms(): Promise<Program[]> {
    if (this.programs) {
      return this.programs;
    } else {
      this.programs = await this.programService.getProgramsThruApi();
      return this.removeProgramConfigurationCruft(this.programs);
    }
  }

  public async createProgram(program: Program): Promise<Program> {
    program = await this.programService.createProgramThruApi(program);
    this.insertProgram(program);
    return program;
  }

  public async updateProgram(program: Program): Promise<Program> {
    await this.programService.updateProgramThruApi(program);
    return program;
  }

  public async deleteProgram(program: Program): Promise<Program> {
    await this.programService.deleteProgramThruApi(program);
    this.removeProgram(program);
    program = null;
    return program;
  }

  public async getProgramConfigurations(): Promise<ProgramConfiguration[]> {
    if (this.programConfigurations) {
      return this.programConfigurations;
    } else {
      this.programConfigurations = await this.programConfigurationService.getProgramConfigurationsThruApi();
      return this.programConfigurations;
    }
  }
  public async createProgramConfiguration(programConfiguration: ProgramConfiguration): Promise<ProgramConfiguration> {
    programConfiguration = await this.programConfigurationService.createProgramConfigurationThruApi(programConfiguration);
    this.insertProgramConfiguration(programConfiguration);
    return programConfiguration;
  }

  public async updateProgramConfiguration(programConfiguration: ProgramConfiguration): Promise<ProgramConfiguration> {
    programConfiguration = await this.programConfigurationService.updateProgramConfigurationThruApi(programConfiguration);
    return programConfiguration;
  }

  public async getClients(): Promise<Client[]> {
    if (this.clients) {
      return this.clients;
    } else {
      this.clients = await this.clientService.getClientsThruApi();
      return this.removeClientConfigurationCruft(this.clients);
    }
  }
  private insertProgram(program: Program): void {
    this.programs.push(program);
  }

  private removeProgram(program: Program): void {
    const index = this.programs.indexOf(program);
    if (index > -1) {
      this.programs.splice(index, 1);
    }
  }

  private insertProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    this.programConfigurations.push(programConfiguration);
  }

  private removeProgramConfigurationCruft(progConfigableObjs: IProgramConfig[]): any[] {
    // some reason spring rest is giving empty array objects of programConfiguration property
    // get rid of them all
    for (let i = 0, len = progConfigableObjs.length; i < len; i++) {
      if (progConfigableObjs[i].programConfiguration && progConfigableObjs[i].programConfiguration.length) {
        progConfigableObjs[i].programConfiguration = [];
      }
    }
    return progConfigableObjs;
  }

  private removeClientConfigurationCruft(clients: Client[]): Client[] {
    // some reason spring rest is giving empty array objects of programConfiguration property
    // get rid of them all
    // for (let i = 0, len = clients.length; i < len; i++) {
    //   if (clients[i].programConfiguration && clients[i].programConfiguration.length) {
    //     clients[i].programConfiguration = [];
    //   }
    // }
    return clients;
  }

}
