import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { modelFieldsRow, modelField } from 'src/app/services/model';

@Component({
  selector: 'app-ui-comp',
  templateUrl: './ui-comp.component.html',
  styleUrls: ['./ui-comp.component.css']
})
export class UiCompComponent implements OnInit {

  public pinkMe:boolean = false
  public field:modelField
  public mylist:[] = []

  constructor(private data:DataService) {}

  ngOnInit() {
    console.log('UiCompComponent ngOnInit');
    this.mylist = this.data.propsValues[this.field.propertyName]
  }


}
