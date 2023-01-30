import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatIconModule, MatListModule],
  exports: [CommonModule, MatIconModule, MatListModule],
  declarations: [],
})
export class MaterialModule {}
