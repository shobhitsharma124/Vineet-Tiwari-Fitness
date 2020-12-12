import { ProductserviceService } from './../productservice.service';
import { Appointments } from './../appointment.model';
import { UserService } from './../_services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string,
    public Ramount: number,
    public bname: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  appoint : Appointments;
  user : any={};
  appoinments : Appointments[] =[];

  registerForm: FormGroup;
    submitted = false;
  
  constructor(public appointment: ProductserviceService,private formBuilder: FormBuilder) {

   }
  
  
package=[500,1600,1500]
   
ngOnInit(){

  this.registerForm = this.formBuilder.group({
    phone:[''],
    streetaddress: [''],
    state: [''],
  pincode: ['',[
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(6),
    Validators.maxLength(6)
  ]],
    city: [''],
    trainerpreference: [''],
    physiotherapist: [''],
    packages: [''],
    firstName: ['',[ Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    lastName: ['',[ Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    email:['',[Validators.required, Validators.email]],
    Ramount:[''],
    bname:[''],
  age : ['',[ Validators.required, Validators.pattern('[0-9]+'), Validators.min(18), Validators.max(60) ]]
  }
   )};  

   get f() { return this.registerForm.controls; 
  console.log(this.registerForm.controls)}

onSubmit() {
  // TODO: Use EventEmitter with form value
  this.submitted = true;
console.log(this.registerForm.invalid)
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        
        alert('SUCCESS!! Welcome: ' + this.registerForm.value.firstName+ " "+ this.registerForm.value.lastName);
        

      this.user = Object.assign(this.user, this.registerForm.value);
      this.addUser(this.user);

      this.appoint=this.registerForm.value;
      this.appointment.add(this.appoint);

      this.registerForm.reset();

}

  addUser(user){

    let users = [];
    if(localStorage.getItem('Users')){
      
      users = JSON.parse(localStorage.getItem('Users'));
      users =[user, ...users];

    }
    else{
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }
    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }

    changePackage(e){
      console.log(e);
      this.registerForm.controls['Ramount'].setValue(e.target.value);
    }

  }
    

