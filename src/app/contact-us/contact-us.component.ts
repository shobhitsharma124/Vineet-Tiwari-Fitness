import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Contact {
  constructor(
    public firstname: string,
    public lastname: string,
    public phonenumber: number,
    public email: string,
    public message: string
  ) { }
}
@Component({
  selector: 'app-contact-us',
  styles:['label{ font-weight:bold;}'],
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {
  @Output() contactdata = new EventEmitter<Contact>();
  contactForm: FormGroup;
  public obj: any = {};
  
  user : any={};
  submitted=false;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.contactForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      message:["",[Validators.required]]
    });
  }

  onSubmit() {
    this.submitted=true;
    if (this.contactForm.invalid) {
      return;
    }

    alert("Thank you! We will get back to you "+ this.contactForm.value.firstname +" " +this.contactForm.value.lastname+ " on " +this.contactForm.value.email);
    this.user = Object.assign(this.user, this.contactForm.value);
    this.addContact(this.user);
    this.contactForm.reset();
  }
  addContact(user){

    let users = [];
    if(localStorage.getItem('Contact')){
      
      users = JSON.parse(localStorage.getItem('Contact'));
      users =[user, ...users];

    }
    else{
      users=[user];
    }
    localStorage.setItem('Contact',JSON.stringify(users));
  }


  
}
