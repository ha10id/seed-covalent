import { Component, OnInit } from '@angular/core';
import { TdDigitsPipe } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // Current date
    year: any = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
    // console.log('HomeComponent Init');
  }

}
