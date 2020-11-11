import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategoryDetailGridPage } from './product-category-detail-grid';

@NgModule({
  declarations: [
    ProductCategoryDetailGridPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryDetailGridPage),
  ],
})
export class ProductCategoryDetailGridPageModule {}
