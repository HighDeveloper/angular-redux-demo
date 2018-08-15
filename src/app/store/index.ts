import { Action } from 'redux'
import { CounterActions } from './actions'
//States
export interface IAppState {
  sessionData?: object //? = Set optional property
}
export const INITIAL_STATE: IAppState = {
  sessionData: null
}
export function rootReducer(lastState: IAppState, action: Action): IAppState {
    
  var newState = {
    sessionData: lastState.sessionData
  }

  switch (action.type) {
    case CounterActions.SAVE_SESSION_DATA:
      newState.sessionData = action['sessionData']
      return newState
    case CounterActions.DELETE_SESSION_DATA:
      newState.sessionData = null
      return newState
    default:
      return newState
  }
  
}