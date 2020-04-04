import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { PublicComponent } from './layout/public';
import { SecureComponent } from './layout/secure';

@NgModule({
  declarations: [
    PublicComponent,
    SecureComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
  ]
})
export class FeaturesModule { }
