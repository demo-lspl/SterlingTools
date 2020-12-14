import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClsPage } from './cls';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ClsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClsPage),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
})
export class ClsPageModule {}
