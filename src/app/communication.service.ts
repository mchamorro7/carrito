import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommunicationService {
  private messageSource = new BehaviorSubject<any[]>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any[]) {
    this.messageSource.next(message)
  }
}