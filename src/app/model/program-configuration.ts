import { Program }              from 'app/model/program';
import { Communication }        from 'app/model/communication';
import { ICommunicationConfig } from 'app/model/icomm-config';

export class ProgramConfiguration implements ICommunicationConfig {

    constructor(programConfig?: ProgramConfiguration) {

        if (programConfig) {
            this.chanEmailPriority  = programConfig.chanEmailPriority;
            this.name               = programConfig.name;
            this.chanIvrPriority    = programConfig.chanIvrPriority;
            this.chanSmsPriority    = programConfig.chanSmsPriority;
            this.chanMailPriority   = programConfig.chanMailPriority;
            this.chanMobilePriority = programConfig.chanMobilePriority;
            this.chanMandatory      = programConfig.chanMandatory;
        } else {
            this.chanEmailPriority  = 0;
            this.chanIvrPriority    = 0;
            this.chanSmsPriority    = 0;
            this.chanMailPriority   = 0;
            this.chanMobilePriority = 0;
            this.chanMandatory      = 'No';
        }
    }

    id: number;
    name: string;
    description: string;
    chanEmailPriority: number;
    chanIvrPriority: number;
    chanSmsPriority: number;
    chanMailPriority: number;
    chanMobilePriority: number;
    chanMandatory: 'No' | 'Email' | 'IVR' | 'SMS';
    effective: string;
    expiration: string;
    program: Program;
    communication: Communication;
}
// https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript

// sample here to validate the model
const programConfigSample: ProgramConfiguration = {
     'id': 1,
     'name': 'Prescription Alerts Order Status',
     'description': 'Order Status Program-level Configuration',
     'chanEmailPriority': 2,
     'chanIvrPriority': 3,
     'chanSmsPriority': 1,
     'chanMailPriority': 0,
     'chanMobilePriority': 0,
     'chanMandatory': 'Email',
     'effective': '2017-1-1',
     'expiration': '9999-12-31',
     'program':
       {'id': 1,
        'name': 'Prescription Alerts',
        'description': 'PBM Communications including Order Status and Refill Reminder alerts',
        'programConfiguration': [1]
       },
     'communication':
       {'id': 261,
        'name': 'Order Received',
        'description': 'Notifies a member when their order is received',
        'programConfiguration': [1],
        'clientConfiguration': []
       }
    };
