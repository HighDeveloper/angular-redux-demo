import { Component, OnInit } from '@angular/core';

import { NgRedux } from '@angular-redux/store'
import { CounterActions } from '../store/actions'
import { IAppState } from "../store/index"

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  inputValue = ""

  constructor(
    private store: NgRedux<IAppState>,
    private actions: CounterActions
  ) { }

  ngOnInit() {



  }

  saveData(valueToSave) {

    this.store.dispatch(this.actions.saveSessionData(valueToSave))

  }

  deleteData() {

    this.store.dispatch(this.actions.deleteSessionData())

  }

}
