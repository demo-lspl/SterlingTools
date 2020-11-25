import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductcategorydetaillistPage } from './productcategorydetaillist';

@NgModule({
  declarations: [
    ProductcategorydetaillistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductcategorydetaillistPage),
  ],
})
export class ProductcategorydetaillistPageModule {}
