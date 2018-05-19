import {Routes, RouterModule} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RigBusService } from './services/rigBus/rig-bus.service';
const appRoutes: Routes = [
  // { path: "", component: LoginComponent },
  // { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    RigBusService
  ],
  exports: [BrowserModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
