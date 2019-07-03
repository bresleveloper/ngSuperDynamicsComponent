import { Component, OnInit, ComponentFactoryResolver, ViewChildren, ViewContainerRef, QueryList, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { modelFieldsRow } from 'src/app/services/model';
import { DataService } from 'src/app/services/data.service';
import { UiCompComponent } from '../ui-comp/ui-comp.component';
import { UiCompInheritedComponent } from '../ui-comp-inherited/ui-comp-inherited.component';

@Component({
  selector: 'big-edit',
  templateUrl: './big-edit.component.html',
  styleUrls: ['./big-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BigEditComponent implements OnInit, AfterViewChecked {


  public ready:boolean = false
  public item:{}
  public rows:modelFieldsRow[]

  //@ViewChildren ('container', { read: ViewContainerRef }) containers: QueryList<ViewContainerRef>;
  @ViewChild ('trueStaticContainer', { static:true, read: ViewContainerRef }) _Scontainer: ViewContainerRef;
  @ViewChild ('bigContainer', { static:false, read: ViewContainerRef }) container: ViewContainerRef;

  
  constructor(private data:DataService, private resolver: ComponentFactoryResolver, private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.data.data.subscribe(items =>{
      this.item = items[1]
      this.amIReady()
    })
    this.data.rows.subscribe(rows =>{
      this.rows = rows
      this.amIReady()
    })

  }

  amIReady(){
    if (this.item && this.rows) {
      this.ready = true
      this.cdr.detectChanges()
    }
  }


 
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - container', this.container);
    console.log('ngAfterViewChecked - _Scontainer', this._Scontainer);
    
    if (this.ready && this.container) {
      console.log('ngAfterViewChecked ready and container', this.container);

      this.container.clear()

      for (let i = 0; i < this.rows.length; i++) {
        const r = this.rows[i];

        for (let j = 0; j < r.fields.length; j++) {
          const f = r.fields[j];

          let type = i == 0 ? UiCompComponent : UiCompInheritedComponent
  
          const componentFactory = this.resolver.resolveComponentFactory(type);
          //here 'createComponent' will launch ctor
          const componentRef = this.container.createComponent(componentFactory,);
          let baseRef = componentRef.instance as UiCompComponent
          console.log('UiCompComponent with ', f);
          baseRef.field = f
        }
      }
      this.cdr.detectChanges()
    }
  }
}
