import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from './sellers.service';
import { SellerProduct } from './sellers.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  constructor() {}


  addSeller() {
    /*const instance = this.modalService.open(SellerDlgComponent);
    instance.componentInstance.seller = { name: 'Óli', id: 4};
    instance.result.then(obj => {
      console.log(obj);
    }).catch(err => {
      console.log("Dialog was closed");
    });*/
  }

//  ngOnInit() {
    // this.sellerId = this.route.snapshot.params['id'];
    // console.log(this.sellerId);

  //  this.route.params.subscribe(params => {
    //  this.sellerId = +params['id'];
    //});



    /*this.service.getSellerProduct(this.sellerId).subscribe(result => {
      this.sellerProducts = result;
    }, err => {
      console.log("Didn't work!")
      //todo: display notification!
    });*/

}
