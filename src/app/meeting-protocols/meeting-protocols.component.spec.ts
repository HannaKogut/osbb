import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingProtocolsComponent } from './meeting-protocols.component';

describe('MeetingProtocolsComponent', () => {
  let component: MeetingProtocolsComponent;
  let fixture: ComponentFixture<MeetingProtocolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingProtocolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
