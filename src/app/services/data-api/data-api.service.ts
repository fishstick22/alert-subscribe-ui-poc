import { Injectable }                  from '@angular/core';

import { ClientService }               from 'app/services/data-api/client/client.service';
import { ClientConfigurationService }  from 'app/services/data-api/client-configuration/client-configuration.service';
import { CommunicationService }        from 'app/services/data-api/communication/communication.service';
import { ProgramService }              from 'app/services/data-api/program/program.service';
import { ProgramConfigurationService } from 'app/services/data-api/program-configuration/program-configuration.service';

import { IProgramConfig }              from 'app/classes/model/iprog-config';

import { Communication }               from 'app/classes/model/communication';
import { ClientConfiguration }         from 'app/classes/model/client-configuration';
import { Program }                     from 'app/classes/model/program';
import { ProgramConfiguration }        from 'app/classes/model/program-configuration';
import { Client }                      from 'app/classes/model/client';

@Injectable()
export class DataApiService {

  clients: Client[];
  clientConfigurations: ClientConfiguration[];
  communications: Communication[];
  programs: Program[];
  programConfigurations: ProgramConfiguration[];

  constructor(
    private clientService: ClientService,
    private clientConfigurationService: ClientConfigurationService,
    private communicationService: CommunicationService,
    private programService: ProgramService,
    private programConfigurationService: ProgramConfigurationService
  ) { }

  public async getClients(): Promise<Client[]> {
    if (this.clients) {
      return this.clients;
    } else {
      this.clients = await this.clientService.getClientsThruApi();
      return this.removeClientConfigurationCruft(this.clients);
    }
  }

  public async getClientConfigurations(): Promise<ClientConfiguration[]> {
    if (this.clientConfigurations) {
      return this.clientConfigurations;
    } else {
      this.clientConfigurations = await this.clientConfigurationService.getClientConfigurationsThruApi();
      return this.clientConfigurations;
    }
  }

  public async createClientConfiguration(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    clientConfiguration = await this.clientConfigurationService.createClientConfigurationThruApi(clientConfiguration);
    this.insertClientConfiguration(clientConfiguration);
    return clientConfiguration;
  }

  public async updateClientConfiguration(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    clientConfiguration = await this.clientConfigurationService.updateClientConfigurationThruApi(clientConfiguration);
    return clientConfiguration;
  }

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

  /*
  */
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

  private insertClientConfiguration(clientConfiguration: ClientConfiguration): void {
    this.clientConfigurations.push(clientConfiguration);
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
