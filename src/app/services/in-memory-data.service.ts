import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const communication = [
      {"id":261,"name":"Order Received","description":"Notifies a member when their order is received"},
      {"id":264,"name":"Order Shipped","description":"Notifies a member when their order is shipped"},
      {"id":1343,"name":"Future Fill Held","description":"Notifies a member when their order is held due to refill too soon"},
      {"id":1344,"name":"Future Fill Split","description":"Notifies a member when part of their order is held due to refill too soon"},
      {"id":1904,"name":"Ship Consent Initial","description":"Initial consent from member"},
      {"id":1905,"name":"Ship Consent Followup","description":"Followup consent from member"},
      {"id":1906,"name":"Ship Consent Final","description":"Final followup consent from member"},
      {"id":1907,"name":"Future Fill Release Reminder","description":"The Future Fill Release Reminder alert will be triggered by LINKS and sent to CMP when a prescription is released from future fill"}
    ];
    const program = [
      {"id":1,"name":"Prescription Alerts","description":"PBM Communications including Order Status and Refill Reminder alerts"}
    ];
    return { communication: communication, program: program};
  }
}