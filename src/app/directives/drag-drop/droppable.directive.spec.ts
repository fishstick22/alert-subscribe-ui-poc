import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';
import { Component, DebugElement }   from '@angular/core';
import { DropEvent }                 from 'app/classes/drop-event.model';
import { DroppableDirective }        from './droppable.directive';

@Component({
  template: `
  <div class="card card-outline-primary mb-3" appDroppable [dragOverClass]="'drag-target-border-green'" [dropScope]="'vegetable'"
  [dragHintClass]="'drag-hint'" (onDrop)="onVegetableDrop($event)">
<!--
  <div class="card-block scroll-list">
      <li *ngFor="let item of droppedVegetables" class="list-group-item">{{item.name}}</li>
  </div> -->
</div>
  `
})
class TestDroppableComponent {
  vegetables = [
    {name: 'Carrot', type: 'vegetable'},
    {name: 'Onion', type: 'vegetable'},
    {name: 'Potato', type: 'vegetable'},
    {name: 'Capsicum', type: 'vegetable'}];

  fruits = [
    {name: 'Apple', type: 'fruit'},
    {name: 'Orange', type: 'fruit'},
    {name: 'Mango', type: 'fruit'},
    {name: 'Banana', type: 'fruit'}];

  droppedFruits = [];
  droppedVegetables = [];
  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  constructor() { }

  onFruitDrop(e: DropEvent) {
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.fruits);
  }

  onVegetableDrop(e: DropEvent) {
    this.droppedVegetables.push(e.dragData);
    this.removeItem(e.dragData, this.vegetables);
  }

  onAnyDrop(e: DropEvent) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}

describe('DroppableDirective', () => {
  let component: TestDroppableComponent;
  let fixture: ComponentFixture<TestDroppableComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDroppableComponent, DroppableDirective]
    });

    fixture = TestBed.createComponent(TestDroppableComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it('Directive should add class to test div', () => {
    inputEl.triggerEventHandler('drop', null);
    fixture.detectChanges();

    expect(inputEl.nativeElement.classList.length).toBe(1);
    // const directive = new DroppableDirective();
    // expect(directive).toBeTruthy();
  });
});
