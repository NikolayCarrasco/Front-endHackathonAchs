import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorScreenComponent } from './screens/visitor-screen/visitor-screen.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'home', component: VisitorScreenComponent },
      { path: '**', component: VisitorScreenComponent, redirectTo: 'home' },
    ]
  },
  { path: '**', redirectTo: 'visitor/home', component: VisitorScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
