import { Component, Input }         from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './component-as-content.modal-content.component.html',
  styleUrls: ['./component-as-content.component.css']

})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-component-as-content',
  templateUrl: './component-as-content.component.html',
  styleUrls: ['./component-as-content.component.css']
})
export class ComponentAsContentComponent {

  constructor(private modalService: NgbModal) {}
  
    open() {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
    }

}
