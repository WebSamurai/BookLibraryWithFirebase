import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonListComponent } from './common-list.component';
import { Card } from '../../enitites/card';

describe('CommonListComponent', () => {
  let component: CommonListComponent<Card>;
  let fixture: ComponentFixture<CommonListComponent<Card>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(CommonListComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
