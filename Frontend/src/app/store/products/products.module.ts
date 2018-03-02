import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {FormsModule} from "@angular/forms";


// import { ProductsService } from './products.services';

@NgModule({
  imports: [ThemeModule,ProductsRoutingModule,HttpClientModule],
  declarations: [ProductsComponent],
  providers: []
})
export class ProductsModule {}
