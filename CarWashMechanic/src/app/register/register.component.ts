import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  empForm: FormGroup
constructor(private fb:FormBuilder, private regServ: RegisterService, private dialogRef: DialogRef<RegisterComponent>){
  this.empForm=this.fb.group({
    firstName:['',Validators.required,Validators.minLength(10)],
    lastName:['',Validators.required],
    gender:['',Validators.required],
    email:['',Validators.email,,Validators.pattern('^[a-z0-9._%+-]+@gmail+\.[a-z]{3,4}$')],
    mobileNumber:['',Validators.minLength(10)]
  });
}
onSubmit(){
  if(this.empForm.valid){
    this.regServ.addUser(this.empForm.value).subscribe({
      next: (val:any)=>{
       alert('employee added successfully');
       this.dialogRef.close();
      },
      error: (err:any)=>{
        console.error(err);
      }
    })
  }
}

}
