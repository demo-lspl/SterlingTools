import { NgModule } from '@angular/core';
import { AccordiantestingComponent } from './accordiantesting/accordiantesting';
import { FiltersorterComponent } from './filtersorter/filtersorter';
import { ProductComponent } from './product/product';
import { CartitemComponent } from './cartitem/cartitem';
import { CartComponent } from './cart/cart';
import { ProductListComponent } from './product-list/product-list';

@NgModule({
	declarations: [AccordiantestingComponent,
    FiltersorterComponent,
    ProductComponent,
    CartitemComponent,
    CartComponent,
    ProductListComponent,
   ],
	imports: [],
	exports: [AccordiantestingComponent,
    FiltersorterComponent,
    ProductComponent,
    CartitemComponent,
    CartComponent,
    ProductListComponent,
   ]
})
export class ComponentsModule {}
