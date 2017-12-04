import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsProtocolsComponent } from './controls-protocols.component';

describe('ControlsProtocolsComponent', () => {
  let component: ControlsProtocolsComponent;
  let fixture: ComponentFixture<ControlsProtocolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsProtocolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
