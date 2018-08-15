import { Injectable } from '@angular/core'
import { Action } from 'redux'

@Injectable()
export class CounterActions {

  static SAVE_SESSION_DATA = 'SAVE_USER_DATA'
  static DELETE_SESSION_DATA = 'DELETE_USER_DATA'

  saveSessionData(sessionData): Action {

    var action = { type: CounterActions.SAVE_SESSION_DATA, sessionData: sessionData }
    return action

  }

  deleteSessionData(): Action {

    return { type: CounterActions.DELETE_SESSION_DATA }
    
  }
  
}