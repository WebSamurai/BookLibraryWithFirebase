import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloBoadsComponent } from './trello-boads.component';

describe('TrelloBoadsComponent', () => {
  let component: TrelloBoadsComponent;
  let fixture: ComponentFixture<TrelloBoadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloBoadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloBoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
