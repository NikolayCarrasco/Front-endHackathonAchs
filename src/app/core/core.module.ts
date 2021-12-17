import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { TokenService } from './services/token/token.service';
import { NotificationService } from './services/notification/notification.service';
import { HelperService } from './services/helper/helper.service';

const services: any = [
  HttpService,
  TokenService,
  NotificationService,
  HelperService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
