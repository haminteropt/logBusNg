import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { RigBusService } from '../../rigBus/rigBus/rig-bus.service';

@Component({
  selector: 'app-rig-bus-ui',
  templateUrl: './rig-bus-ui.component.html',
  styleUrls: ['./rig-bus-ui.component.scss']
})
export class RigBusUIComponent implements OnInit {

  count = 0;
  constructor(private rigServ: RigBusService) { }

  ngOnInit() {
  }

  getRigData(ev: any): void {
    this.rigServ.rigInfo$.subscribe((val) => {
      console.log(JSON.stringify(val, undefined, 2));
    });
    this.rigServ.fetchRigInfo();
  }

}
