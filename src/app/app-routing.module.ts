import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/comnponents/login/login.component';
import { VisitorModule } from './visitor/visitor.module';

const routes: Routes = [
  { path: '', redirectTo: 'visitor/home', component: VisitorModule, pathMatch: 'full' },
  {
    path: 'visitor',
    loadChildren: () => import('./visitor/visitor.module')
      .then(VisitorModule => VisitorModule.VisitorModule),
  },
  {
    path: 'admin',
  },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'visitor/home', component: VisitorModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
