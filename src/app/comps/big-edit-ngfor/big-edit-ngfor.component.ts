import { Component, OnInit, ComponentFactoryResolver, ViewChildren, ViewContainerRef, QueryList, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { modelFieldsRow, modelField } from 'src/app/services/model';
import { DataService } from 'src/app/services/data.service';
import { UiCompComponent } from '../ui-comp/ui-comp.component';
import { UiCompInheritedComponent } from '../ui-comp-inherited/ui-comp-inherited.component';


@Component({
  selector: 'big-edit-ngfor',
  templateUrl: './big-edit-ngfor.component.html',
  styleUrls: ['./big-edit-ngfor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigEditNgforComponent implements OnInit, AfterViewChecked {


  public ready:boolean = false
  public item:{}
  public rows:modelFieldsRow[]

  @ViewChildren ('container', { read: ViewContainerRef }) containers: QueryList<ViewContainerRef>;

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
    console.log('ngAfterViewChecked - containers', this.containers);
    
    if (this.ready && this.containers) {
      console.log('ngAfterViewChecked ready and container', this.containers);


      this.containers.forEach((c, i) =>{
        let f = c['_view'].context.$implicit as modelField
        
        let type = i > 0 ? UiCompComponent : UiCompInheritedComponent
  
        const componentFactory = this.resolver.resolveComponentFactory(type);
        //here 'createComponent' will launch ctor
        const componentRef = c.createComponent(componentFactory,);
        let baseRef = componentRef.instance as UiCompComponent
        console.log('UiCompComponent with ', f);
        baseRef.field = f
      })



      this.cdr.detectChanges()
    }
  }
}
