import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchproductsPage } from './searchproducts';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    SearchproductsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchproductsPage),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
})
export class SearchproductsPageModule {}
