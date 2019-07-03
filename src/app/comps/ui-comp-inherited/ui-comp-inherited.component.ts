import { Component, OnInit } from '@angular/core';
import { UiCompComponent } from '../ui-comp/ui-comp.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ui-comp-inherited',
  templateUrl: '../ui-comp/ui-comp.component.html',
  styleUrls: ['../ui-comp/ui-comp.component.css']
})
export class UiCompInheritedComponent extends UiCompComponent implements OnInit {

  constructor(private _data:DataService) { 
    super(_data)
  }

  ngOnInit() {
  }

}
