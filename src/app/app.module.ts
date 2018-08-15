import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgReduxModule, NgRedux } from '@angular-redux/store'

import { AppComponent } from './app.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { ReceiveDataComponent } from './receive-data/receive-data.component';

import { CounterActions } from './store/actions'
import { IAppState, rootReducer, INITIAL_STATE } from './store/index'

@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent,
    ReceiveDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [
    CounterActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    ngRedux: NgRedux<IAppState>
  ) {

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE
    )

  }

}
