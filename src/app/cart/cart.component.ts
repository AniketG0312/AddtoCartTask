import { Component, OnInit } from '@angular/core';
import { CartService } from '../api/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements  OnInit{
  public product!:any[];
  public grandtotal:number =0;
  constructor(private cart:CartService){}
 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

     this.cart.getproduct().subscribe(res=>{
      this.product =res;
      this.grandtotal=this.cart.gettotalprice();
     })

  }

  emptycart(){
    this.cart.removeallcart();
  }


  delete(item:any){
    this.cart.removecartitem(item);
  }
}
