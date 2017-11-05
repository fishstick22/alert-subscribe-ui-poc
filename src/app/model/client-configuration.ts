import { Client }               from 'app/model/client';
import { Communication }        from 'app/model/communication';
import { ICommunicationConfig } from 'app/model/icomm-config';

export class ClientConfiguration implements ICommunicationConfig {

    constructor(clientConfig?: ClientConfiguration) {

        if (clientConfig) {
            this.name               = clientConfig.name;
            this.chanEmailPriority  = clientConfig.chanEmailPriority;
            this.chanIvrPriority    = clientConfig.chanIvrPriority;
            this.chanSmsPriority    = clientConfig.chanSmsPriority;
            this.chanMailPriority   = clientConfig.chanMailPriority;
            this.chanMobilePriority = clientConfig.chanMobilePriority;
            this.chanMandatory      = clientConfig.chanMandatory;
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
    client: Client;
    communication: Communication;
}
// https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript

// sample here to validate the model
const clientConfigSample: ClientConfiguration = {
     'id': 1,
     'name': 'Prescription Alerts Order Status',
     'description': 'Order Status Client-level Configuration',
     'chanEmailPriority': 2,
     'chanIvrPriority': 3,
     'chanSmsPriority': 1,
     'chanMailPriority': 0,
     'chanMobilePriority': 0,
     'chanMandatory': 'Email',
     'effective': '2017-1-1',
     'expiration': '9999-12-31',
     'client':
       {'id': 259,
        'code': 'BCC',
        'name': 'BLUE CROSS OF CONNECTICUT',
        'clientConfiguration': []
       },
     'communication':
       {'id': 261,
        'name': 'Order Received',
        'description': 'Notifies a member when their order is received',
        'programConfiguration': [1],
        'clientConfiguration': []
       }
    };
