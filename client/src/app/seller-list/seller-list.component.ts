import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { SellerProduct } from '../sellers.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  private sellers: Seller[];

  constructor(
    private service: SellersService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getSellers().subscribe(result => {
       this.sellers = result;
     });
  }

  onClickSeller(id){
    this.router.navigate(['seller', id]);
  };

  // addSeller() {
  //   const instance = this.modalService.open(SellerDlgComponent);
  //   SellerDlgComponent.result.then()
  //   instance.componentInstance.seller = { , name };
  //   instance.result.then(obj => {
  //     console.log(obj);
  //   }).catch(err => {
  //     console.log("Dialog was closed");
  //   });
  // }
}
