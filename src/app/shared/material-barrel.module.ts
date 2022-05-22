import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
  ],
  exports: [MatIconModule, MatToolbarModule, MatSliderModule, MatButtonModule],
})
export class MaterialBarrelModule {}
