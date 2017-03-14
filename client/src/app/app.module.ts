import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { RouterModule } from '@angular/router';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { ProductDlgComponent } from './product-dlg/product-dlg.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerDlgComponent,
    ProductCardComponent,
    SellerDlgComponent,
    SellerListComponent,
    SellerDetailsComponent,
    ProductDlgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellerList',
      pathMatch: 'full'
    }, {
      path: 'sellerList',
      component: SellerListComponent
    }, {
      path: 'seller/:id',
      component: SellerDetailsComponent
    }, {
      path: 'addSeller',
      component: SellerDlgComponent
    }])
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [SellerDlgComponent]
})
export class AppModule { }
