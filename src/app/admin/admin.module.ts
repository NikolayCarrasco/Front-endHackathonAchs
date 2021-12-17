import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material.module';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';
import { AdminScreenComponent } from './screens/admin-screen/admin-screen.component';

const components: any = [
  AdminComponentComponent,
]

const screens: any = [
  AdminScreenComponent
]

@NgModule({
  declarations: [...components, ...screens],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule, MaterialModule
  ]
})
export class AdminModule { }
