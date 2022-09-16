import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonRemoveAllComponent } from './todo-button-remove-all.component';

describe('TodoButtonRemoveAllComponent', () => {
  let component: TodoButtonRemoveAllComponent;
  let fixture: ComponentFixture<TodoButtonRemoveAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonRemoveAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonRemoveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
