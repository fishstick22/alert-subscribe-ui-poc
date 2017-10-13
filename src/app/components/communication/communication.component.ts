import { Component, OnInit } from '@angular/core';

import { Communication }         from './../../model/communication';
import { CommunicationService }  from './../../services/communication.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  communications: Communication[] = [];

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    console.log('CommunicationComponent ngOnInit...');
    this.communicationService.getCommunications()
      .then(communications => {
        console.log(communications)
        this.communications = communications;
        console.log(this.communications.length);
      });

  }

}
