import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { modelFieldsRow } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public items = [
    { name:'jhon' , age:30, hobby:'doe'},
    { name:'jim' , age:35, hobby:'does'},
    { name:'jack' , age:31, hobby:'do'},
    { name:'jonny' , age:50, hobby:'depth'},
    { name:'joshua' , age:60, hobby:'dip'},
    { name:'jeremy' , age:75, hobby:'dare'},
    { name:'jimmy' , age:300, hobby:'doing'},
  ]

  public configs:modelFieldsRow[] = [
    { title : '1st row', fields:[
      { displayName:'my name is', propertyName:'airplanes' },
      { displayName:'my age is', propertyName:'colors' }
    ]},
    { title : '2nd row', fields:[
      { displayName:'my hobby is', propertyName:'hobbies' },
    ]}
  ]

  public propsValues = {
    hobbies : ['eat', 'drink', 'be Happy'],
    airplanes : ['jet', 'army', 'piper'],
    colors : ['white', 'violet', 'pink'],
  }

  public rows:Observable<any[]> = of(this.configs).pipe(delay(325))
  public data:Observable<any[]> = of(this.items).pipe(delay(585))
  public propsValuesLists:Observable<any> = of(this.propsValues).pipe(delay(720))
  
}
