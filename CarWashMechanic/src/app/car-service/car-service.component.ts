import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-car-service',
  templateUrl: './car-service.component.html',
  styleUrls: ['./car-service.component.css']
})
export class CarServiceComponent implements OnInit {

  public ServiceList :any;

constructor(private regServ : RegisterService, private router:Router){
}

ngOnInit(): void{
  this.ServiceList = this.regServ.getServices().subscribe(result=>{
    this.ServiceList = result;
    console.log("Result",this.ServiceList)
  });
}
addCart(){
  this.router.navigate(['/login'])
}
}
