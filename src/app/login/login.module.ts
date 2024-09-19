import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log/log.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LogComponent
  ]
})
export class LoginModule { }
