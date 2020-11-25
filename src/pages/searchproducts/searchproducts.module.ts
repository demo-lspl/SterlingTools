import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchproductsPage } from './searchproducts';

@NgModule({
  declarations: [
    SearchproductsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchproductsPage),
  ],
})
export class SearchproductsPageModule {}
