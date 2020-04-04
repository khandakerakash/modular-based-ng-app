import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as sharedComponents from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedComponents.components
  ],
  declarations: [
    ...sharedComponents.components
  ]
})
export class SharedModule { }
