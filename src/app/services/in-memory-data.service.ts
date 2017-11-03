import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const communication = [
      {'id': 261,  'name': 'Order Received', 'description': 'Notifies a member when their order is received'},
      {'id': 264,  'name': 'Order Shipped',  'description': 'Notifies a member when their order is shipped'},
      {'id': 1343, 'name': 'Future Fill Held',  'description': 'Notifies a member when their order is held due to refill too soon'},
      {'id': 1344, 'name': 'Future Fill Split', 'description': 'Notifies a member when part of their order is held due to refill too soon'},
      {'id': 1904, 'name': 'Ship Consent Initial',  'description': 'Initial consent from member'},
      {'id': 1905, 'name': 'Ship Consent Followup', 'description': 'Followup consent from member'},
      {'id': 1906, 'name': 'Ship Consent Final',    'description': 'Final followup consent from member'},
      {'id': 1907,
       'name': 'Future Fill Release Reminder',
       'description': 'Notifies a member when a prescription is released from future fill'
      }
    ];
    const program = [
      {'id': 1, 'name': 'Prescription Alerts',     'description': 'PBM Communications including Order Status and Refill Reminder alerts'},
      {'id': 2, 'name': 'Non-Prescription Alerts', 'description': 'tired of adding a new program just to test deleting it'}
    ];
    const programconfiguration = [
      {'id': 1,
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
          'programConfiguration': [1]
        }
      }
    ];
    const client = [
      {'id': 142,   'code': 'AMD',   'name': 'AT&T INC.'},
      {'id': 259,   'code': 'BCC',   'name': 'BLUE CROSS OF CONNECTICUT'},
      {'id': 339,   'code': 'BCAL',  'name': 'BLUE CROSS OF ALABAMA'},
      {'id': 428,   'code': 'BOH',   'name': 'BLUE CROSS OF OHIO'},
      {'id': 10203, 'code': 'BCBSN', 'name': 'BLUE CROSS BLUE SHIELD OF NC'},
      {'id': 11254, 'code': 'BCOGA', 'name': 'BLUE CROSS/BLUE SHIELD GEORGIA'},
      {'id': 11614, 'code': 'BCCAL', 'name': 'BLUE CROSS/BS OF CALIFORNIA'},
      {'id': 11643, 'code': 'BCOMI', 'name': 'BLUE CROSS OF MICHIGAN'},
      {'id': 12130, 'code': 'BCBSA', 'name': 'BLUE CROSS BLUE SHIELD ASSOC.'},
      {'id': 12675, 'code': 'BCORO', 'name': 'BLUE CROSS OF ROCHESTER'},
      {'id': 14481, 'code': 'ZC342', 'name': 'BLUE CROSS IDAHO-HMO'},
      {'id': 14482, 'code': 'ZC343', 'name': 'BLUE CROSS IDAHO-PPO'},
      {'id': 14606, 'code': 'ZCC01', 'name': 'BLUE CROSS BLUE SHIELD OF TENN'},
      {'id': 22912, 'code': 'X7700', 'name': 'AETNA-PPO'},
      {'id': 22913, 'code': 'X7705', 'name': 'AETNA-SRC'},
      {'id': 22914, 'code': 'X7710', 'name': 'AETNA-AGB'},
      {'id': 22915, 'code': 'X7715', 'name': 'AETNA-DISCOUNT CARE'},
      {'id': 22916, 'code': 'X7720', 'name': 'AETNA-ASH'},
      {'id': 22917, 'code': 'X7730', 'name': 'AETNA-HMO'},
      {'id': 22918, 'code': 'X7750', 'name': 'AETNA-MCPP - MEDICAL BNFT'},
      {'id': 22919, 'code': 'X7760', 'name': 'AETNA-HNO'},
      {'id': 22920, 'code': 'X7770', 'name': 'AETNA-MED-D PDP S5810'},
      {'id': 22921, 'code': 'X7771', 'name': 'AETNA-MED-D MAPD H0318'},
      {'id': 22922, 'code': 'X7772', 'name': 'AETNA-MED-D MAPD H0523'}
    ];
    return { communication: communication, program: program, programconfiguration: programconfiguration, client: client};
  }
}
