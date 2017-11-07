import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const communication = [
      {'id': 260,  'name': 'Refill Available Notice',
            'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
            'programConfiguration': []},
      {'id': 261,  'name': 'Order Received ',
            'description': 'Notifies a member when their order is received',
            'programConfiguration': [1]},
      {'id': 263,  'name': 'Refill Expiring Notice',
            'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
            'programConfiguration': []},
      {'id': 264,  'name': 'Order Shipped',
            'description': 'Notifies a member when their order is shipped',
            'programConfiguration': []},
      {'id': 1229, 'name': 'Zero Refills Notice',
            'description': 'Notifies a member when one or more of their Rx\s has no more refills available',
            'programConfiguration': []},
      {'id': 1230, 'name': 'RFM Auto Renewal ',
            'description': 'Notifies a member when we will be reaching out to their Dr. to get a new RX',
            'programConfiguration': []},
      {'id': 1231, 'name': 'RFM Auto Refill ',
            'description': 'Notifies a member when we will be automatically refilling their Rx',
            'programConfiguration': []},
      {'id': 1232, 'name': 'RFM MD Denied ',
            'description': 'Notifies a member when their Dr. Denied our request for a new Rx',
            'programConfiguration': []},
      {'id': 1233, 'name': 'RFM MD Unresponsive ',
            'description': 'Notifies a member when their Dr. was unresponsive to our request for a new Rx',
            'programConfiguration': []},
      {'id': 1341, 'name': 'RTP (Return to Participant) w/ MD Contact',
            'description': 'Notifies a member when their order cannot be filled and we tried to contact their Doctor',
            'programConfiguration': []},
      {'id': 1342, 'name': 'RTP (Return to Participant) w/o MD Contact',
            'description': 'Notifies a member when their order cannot be filled but we did not reach out to their doctor',
            'programConfiguration': []},
      {'id': 1343, 'name': 'Future Fill Held ',
            'description': 'Notifies a member when their order is held due to refill too soon',
            'programConfiguration': []},
      {'id': 1344, 'name': 'Future Fill Split ',
            'description': 'Notifies a member when part of their order is held due to refill too soon',
            'programConfiguration': []},
      {'id': 1859, 'name': 'Doctor Hold',
            'description': 'Notifies member when Order is Held by Doctor.',
            'programConfiguration': []},
      {'id': 1861, 'name': 'Cannot Fill',
            'description': 'Notifies member when Order cannot be filled (previously RTP)',
            'programConfiguration': []},
      {'id': 1904, 'name': 'Ship Consent Initial',
            'description': 'Initial consent from member',
            'programConfiguration': []},
      {'id': 1905, 'name': 'Ship Consent Followup',
            'description': 'Followup consent from member',
            'programConfiguration': []},
      {'id': 1906, 'name': 'Ship Consent Final',
            'description': 'Final followup consent from member',
            'programConfiguration': []},
      {'id': 1907, 'name': 'Future Fill Release Reminder',
            'description': 'Notifies a member when a prescription is released from future fill',
            'programConfiguration' : []}
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
    const clientconfiguration = [
      {'id': 1,
       'name': 'Prescription Alerts Order Status',
       'description': 'Order Status Client-level Configuration',
       'chanEmailPriority': 2,
       'chanIvrPriority': 3,
       'chanSmsPriority': 1,
       'chanMailPriority': 0,
       'chanMobilePriority': 0,
       'chanMandatory': 'Email',
       'effective': '2017-01-01',
       'expiration': '9999-12-31',
       'client':
         {'id': 142,
          'code': 'AMD',
          'name': 'AT&T INC.'
         },
      'communication':
         {'id': 261,
          'name': 'Order Received ',
          'description': 'Notifies a member when their order is received',
          'programConfiguration': [1]
         }
      },
      {'id': 2,
       'name': 'Prescription Alerts Order Status',
       'description': 'Order Status Client-level Configuration',
       'chanEmailPriority': 2,
       'chanIvrPriority': 3,
       'chanSmsPriority': 1,
       'chanMailPriority': 0,
       'chanMobilePriority': 0,
       'chanMandatory': 'Email',
       'effective': '2017-01-01',
       'expiration': '9999-12-31',
       'client':
         {'id': 259,
          'code': 'BCC',
          'name': 'BLUE CROSS OF CONNECTICUT'
         },
      'communication': 261
      }
    ];
    return {
      communication: communication,
      program: program,
      programconfiguration: programconfiguration,
      client: client,
      clientconfiguration: clientconfiguration
    };
  }
}