import { Component } from '@angular/core';
import { RegisterComponent } from 'src/app/register/register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(private matdialog:MatDialog){}
  openRegister(){
this.matdialog.open(RegisterComponent,{
  width:'45%',
})
  }
}
