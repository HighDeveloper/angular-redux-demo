import { Component, OnInit } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';

import { NgRedux } from '@angular-redux/store'
import { IAppState } from "../store/index"

@Component({
  selector: 'app-receive-data',
  templateUrl: './receive-data.component.html',
  styleUrls: ['./receive-data.component.css']
})
export class ReceiveDataComponent implements OnInit {

  storeData: object = {}

  constructor(
    private store: NgRedux<IAppState>
  ) { }

  ngOnInit() {

    this.storeData = this.store.getState()
    this.store.subscribe(() => {
      this.storeData = this.store.getState()
    })

  }

}
