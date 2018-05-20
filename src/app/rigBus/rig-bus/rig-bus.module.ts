import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RigBusService } from '../rigBus/rig-bus.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  declarations: []
})
export class RigBusModule { }
