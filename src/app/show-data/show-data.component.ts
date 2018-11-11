import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Data } from "../data";


@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})

export class ShowDataComponent implements OnInit {
  myData: Data[];

  constructor(private dataService: DataService) { }

  getMyData(): void {
    this.dataService.getData()
      .subscribe(myData => this.myData = myData);
  }

  ngOnInit() {
    this.getMyData();
  }

}
