import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();

  constructor() { }

    setData(message: string) {
        // just an example:
        this.subject.next({ text: message });
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}
