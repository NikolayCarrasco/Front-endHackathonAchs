import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminScreenComponent } from './screens/admin-screen/admin-screen.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'home', component: AdminScreenComponent },
      { path: '**', component: AdminScreenComponent, redirectTo: 'home' }
    ],
  },
  { path: '**', redirectTo: 'admin/home', component: AdminScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
