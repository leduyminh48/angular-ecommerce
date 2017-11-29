import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services';
import { ComponentsModule } from './components';

@NgModule({
  imports: [CommonModule, ComponentsModule, ServicesModule],
  exports: [ServicesModule, ComponentsModule],
  declarations: [],
})
export class SharedModule {}
