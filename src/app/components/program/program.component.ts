import { Component, OnInit } from '@angular/core';

import { Program }         from './../../model/program';
import { ProgramService }  from './../../services/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programs: Program[] = [];

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    console.log('ProgramComponent ngOnInit...');
    this.programService.getPrograms()
      .then(programs => {
        console.log(programs)
        this.programs = programs;
        console.log(this.programs.length);
      });

  }

}
