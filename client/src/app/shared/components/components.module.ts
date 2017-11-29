import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavbarModule } from './navbar';

const componentModules = [AngularMaterialModule, NavbarModule];

@NgModule({
  imports: [CommonModule, ...componentModules],
  exports: [...componentModules],
  declarations: [],
})
export class ComponentsModule {}
