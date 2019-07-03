import { Component, OnInit, ComponentFactoryResolver, ViewChildren, ViewContainerRef, QueryList, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { modelFieldsRow } from 'src/app/services/model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'big-log',
  templateUrl: './big-log.component.html',
  styleUrls: ['./big-log.component.css']
})
export class BigLogComponent implements OnInit,
AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {


public ready:boolean = false
public item:{}
public rows:modelFieldsRow[]

@ViewChildren ('container', { read: ViewContainerRef }) containers: QueryList<ViewContainerRef>;


constructor(private data:DataService, private resolver: ComponentFactoryResolver) { }

ngOnInit() {
  this.data.data.subscribe(items =>{
    this.item = items[0]
    this.amIReady()
  })
  this.data.rows.subscribe(rows =>{
    this.rows = rows
    this.amIReady()
  })

  this.logi('ngOnInit');
  
}

amIReady(){
  if (this.item && this.rows) {
    this.ready = true
  }
}

logi(name:string){
  let a = this.containers ? this.containers.toArray() : undefined
  console.log(name, this.ready, a, this.containers);

}

ngAfterContentChecked(): void {
  this.logi('ngAfterContentChecked');
}
ngAfterContentInit(): void {
  this.logi('ngAfterContentInit');
}
ngAfterViewChecked(): void {
  this.logi('ngAfterViewChecked');
}
ngAfterViewInit(): void {
  this.logi('ngAfterViewInit');
}

}
