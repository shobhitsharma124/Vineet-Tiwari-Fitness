import { Appointments } from './appointment.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {


appointments : Appointments[]=[];

add(appointment : Appointments){

this.appointments.push(appointment);
}

fetch()
{
  return this.appointments
}




  constructor() { }
}
