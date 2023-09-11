import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:BookserviceService,private router: Router){}

  ngOnInit(): void {
    this.authservice.isLogedIn().subscribe((value)=>{
      if(value)this.goToHomePage()
    })
  }

  onSubmit(email:HTMLInputElement,password:HTMLInputElement){
    
    
    this.authservice.login(email.value,password.value).subscribe((result)=>{
      if(result) this.goToHomePage()
      else{
        console.log("worng credentials");
        
      }
      
    })
  }
  goToHomePage(): void {
    this.router.navigate(['/home']); // Navigate to the home page
  }

}
