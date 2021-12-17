import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponentComponent } from './components/visitor-component/visitor-component.component';
import { VisitorScreenComponent } from './screens/visitor-screen/visitor-screen.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material.module';

const components: any = [
  VisitorComponentComponent,
]

const screens: any = [
  VisitorScreenComponent
]

@NgModule({
  declarations: [...components, ...screens],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    CoreModule, MaterialModule
  ]
})
export class VisitorModule { }
