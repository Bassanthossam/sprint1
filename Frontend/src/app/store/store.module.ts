import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import {FormsModule} from "@angular/forms";

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';
// import { ProductsService } from './products/products.services';


@NgModule({
  imports: [ThemeModule, StoreRoutingModule],
  declarations: [StoreComponent, CartComponent],
  entryComponents: [],
  providers: []
})
export class StoreModule {}