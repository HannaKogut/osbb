import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorowersComponent } from './borowers.component';

describe('BorowersComponent', () => {
  let component: BorowersComponent;
  let fixture: ComponentFixture<BorowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
