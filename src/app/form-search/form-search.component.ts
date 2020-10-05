import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  searchUserr:string
  @Output() searchPerson = new EventEmitter<any>();
  searchUser(){
    this.searchPerson.emit(this.searchUserr)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
