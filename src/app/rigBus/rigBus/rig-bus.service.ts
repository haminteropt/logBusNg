import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RigInfo } from '../RigBusModel/RigInfo';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RigBusService {

  public rigInfo$: Subject<any> = new Subject<any>();
  public readonly infoUrl = 'http://localhost:7300/api/v1/OmniRig';
  constructor(private http: HttpClient) { }

  fetchRigInfo(): void {
    const reqHeader = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get(this.infoUrl, { headers: reqHeader }).subscribe((val) => {
      console.log(JSON.stringify(val, undefined, 2));
      this.rigInfo$.next(val);

    });
  }
}
