import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public productlist=new BehaviorSubject<any>([])
  public cartitemlist: any =[]
  constructor() { }
  //get Details

  getproduct(){
    return this.productlist.asObservable();
  }
   
  //add to cart
  addtocart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.gettotalprice();
  }
  //Total Price

  gettotalprice():number{
    let grandtotal = 0;
    this.cartitemlist.map((a:any)=>{
      grandtotal =grandtotal+a.total;
      // console.log(grandtotal);
      
    })
    return grandtotal;
  }


  //empty or delet all
  removeallcart(){
    this.cartitemlist=[]
    this.productlist.next(this.cartitemlist)
  }

  //removecart one item
  
  removecartitem(product:any){
    this.cartitemlist.map((a:any,index:any)=>{
      if(product.id===a.id)
      this.cartitemlist.splice(index,1)

    })
    this.productlist.next(this.cartitemlist);
  }

}
