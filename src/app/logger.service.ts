import { LoggerModel } from './logger.model';

import { Injectable } from "@angular/core";

@Injectable() 
export class LoggerService {

  data:LoggerModel [] = [
    {sno:1,value:"Angularfundamental",type:"book"},
    {sno:1,value:"Honda Civic",type:"car"},
    {sno:1,value:"Play station",type:"Gaming Console"}];

    constructor() {

     }
      
      getData() {

        return this.data;
      }

      onAddData(item:LoggerModel){

        this.data.unshift(item);

      
      }

}