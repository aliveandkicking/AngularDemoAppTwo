import { Injectable, OnInit } from '@angular/core';

interface handler {
    handleSubscription: () => void
}

@Injectable()
export class ExerciseEditModeNotificationService {
  subscribers: handler[] = []

  constructor() {}

  ngOnInit() {
    
  }

  subscribe(handler: handler){    
    if (this.subscribers.includes(handler)) { return }      
    this.subscribers.push(handler)
  }

  unSubscribe(handler: handler) {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] == handler) {
        this.subscribers.splice(i, 1)                
      }      
    }
  }

  notify (senderHandler: handler) {
    this.subscribers.forEach(element => {
      if (element != senderHandler) {
        element.handleSubscription()
      }
    })
  }

}
