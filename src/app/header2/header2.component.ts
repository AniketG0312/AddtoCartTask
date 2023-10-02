import { Component, OnInit } from '@angular/core';
import { CartService } from '../api/cart.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component  implements OnInit{
  public totalItem : number = 0;
  constructor( private cart:CartService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.cart.getproduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

   
}
