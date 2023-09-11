import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit {

   books:Product[]=[]
  constructor(private authService:BookserviceService,private router:Router){
   
  }
  ngAfterViewInit() {
   
    this.authService.getProducts().subscribe((products:Product[]) => {
     this.books=products
     console.log(this.books);
     
    });
  }
 
  ngOnInit(): void {
  
    this.authService.isLogedIn().subscribe((value:boolean)=>{
      if(value) return
      else  this.router.navigate(['/']);
    })
  }

}
