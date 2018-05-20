import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigBusUIComponent } from './rig-bus-ui.component';

describe('RigBusUIComponent', () => {
  let component: RigBusUIComponent;
  let fixture: ComponentFixture<RigBusUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigBusUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigBusUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
