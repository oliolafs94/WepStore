import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { SellerProduct } from '../sellers.service';
//import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {
  private sellerId: number;
  private sellerInfo: Seller;
  private sellers: Seller[];
  sellerProducts: any;

  constructor(private service: SellersService, router: Router, private route: ActivatedRoute) {
    this.sellerProducts = [];
    this.sellers = [];
  }

  ngOnInit() {
    var successHandler = (result) => {
      this.sellerInfo = result;
    };

    var errorHandler = (err) => {
      //todo: display toastr!
      console.log("something failed");
    };

    this.sellerId = this.route.snapshot.params['id'];
// successHandler, errorHandler

    this.service.getSellerById(this.sellerId).subscribe(result =>{
      this.sellerInfo = result;
    });


    this.service.getSellerProduct(this.sellerId).subscribe(result => {
      this.sellerProducts = result;
    }), (err => {
      console.log("Didn't work!")
      //todo: display notification!
    });
  }
    onProductEdited(p: SellerProduct) {
      console.log(p);
    }

}
