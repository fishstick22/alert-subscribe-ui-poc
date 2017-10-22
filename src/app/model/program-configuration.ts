import { Program }       from './program';
import { Communication } from './communication';

export class ProgramConfiguration {
    id: number;
    name: string;
    description: string;
    program: Program;
    communication: Communication;
}

// sample here to validate the model
const progConfig: ProgramConfiguration = 
    {"id":1,
     "name":"Prescription Alerts Order Status",
     "description":"Order Status Program-level Configuration",
     "program":
       {"id":1,
        "name":"Prescription Alerts",
        "description":"PBM Communications including Order Status and Refill Reminder alerts",
        "programConfiguration":[1]
       },
     "communication": 
       {"id":261,
        "name":"Order Received",
        "description":"Notifies a member when their order is received",
        "programConfiguration":[1]
       }
      
    
    };