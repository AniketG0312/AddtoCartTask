import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../api/product-api.service';
import { CartService } from '../api/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  public productlist:any;
  constructor(private apis:ProductApiService,private cart:CartService){}
   
  
  ngOnInit() {
    // throw new Error('Method not impleme/nted.');
    this.apis.getproduct().subscribe(res=>{
      // console.log(res);
      this.productlist=res;
      this.productlist.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
        
      });
      
    })
  }

  //add to cart
  addtocart(item:any){
    this.cart.addtocart(item);
    console.log(item);
    

  }
  // delete
  delete(item:any){
    this.cart.removecartitem(item);
  }
  

}
