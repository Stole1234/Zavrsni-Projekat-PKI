// src/app/cart/cart.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Dodajte ovo!
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule // Dodajte FormsModule ovde!
  ],
  exports: [CartComponent]
})
export class CartModule {}
