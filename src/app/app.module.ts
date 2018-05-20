import {Routes, RouterModule} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RigBusModule } from './rigBus/rig-bus/rig-bus.module';
import { RigBusUIComponent } from './components/rig-bus-ui/rig-bus-ui.component';
import { HttpClient } from '@angular/common/http';
const appRoutes: Routes = [
  // { path: "", component: LoginComponent },
  // { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RigBusUIComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    RigBusModule,
    MaterialModule
  ],
  providers: [
    HttpClient
  ],
  exports: [BrowserModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
