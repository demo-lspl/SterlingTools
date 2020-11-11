import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductcategoryPage } from './productcategory';

@NgModule({
  declarations: [
    ProductcategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductcategoryPage),
  ],
})
export class ProductcategoryPageModule {}
