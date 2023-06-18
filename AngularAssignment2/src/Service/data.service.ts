import { servicedata } from "src/app/data"
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Dataservice{
    constructor() { }

    getmenus(serviceType:string):any[]{
        return servicedata[serviceType];
    }

}