import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public showPassword: boolean = true;

  empForm: FormGroup

constructor(private fb:FormBuilder, private regServ: RegisterService, private dialogRef: DialogRef<RegisterComponent>){
  this.empForm= new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    gender:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]*")]),
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
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

cancel(){
  this.empForm.reset();
}

public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

get firstName(): FormControl{
  return this.empForm.get('firstName') as FormControl;
}

get lastName(): FormControl{
  return this.empForm.get('lastName') as FormControl;
}

get gender(): FormControl{
  return this.empForm.get('gender') as FormControl;
}

get email(): FormControl{
  return this.empForm.get('email') as FormControl;
}

get mobileNumber(): FormControl{
  return this.empForm.get('mobileNumber') as FormControl;
}

get password(): FormControl{
  return this.empForm.get('password') as FormControl;
}

}
