import { ProductserviceService } from './../productservice.service';
import { UserService } from './../_services/user.service';
import { Appointments } from './../appointment.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  app : Appointments[]=[]
  searhResult : Appointments[];
  serachText='';
  
 users:[];
  
  constructor(public appoint:ProductserviceService) { 


  }

  

  ngOnInit() {
    this.app=this.appoint.fetch();
    console.log(this.app);
    this.users = JSON.parse(localStorage.getItem('Users'));

  }

  
  getfitness() {

    // this.app.forEach(element=>{
    //   if(element.trainerpreference== this.serachText){
    //     this.searhResult.push(element);
    //   }
    // });
    console.log(this.serachText);
  }
  clearText(){
    this.serachText='';
    this.searhResult=[];
  }
}
