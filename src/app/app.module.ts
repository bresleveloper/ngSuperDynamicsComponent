import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiCompComponent } from './comps/ui-comp/ui-comp.component';
import { UiCompInheritedComponent } from './comps/ui-comp-inherited/ui-comp-inherited.component';
import { BigEditComponent } from './comps/big-edit/big-edit.component';
import { BigLogComponent } from './comps/big-log/big-log.component';
import { BigEditNgforComponent } from './comps/big-edit-ngfor/big-edit-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    UiCompComponent,
    UiCompInheritedComponent,
    BigEditComponent,
    BigLogComponent,
    BigEditNgforComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[UiCompComponent, UiCompInheritedComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
