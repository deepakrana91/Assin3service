import { LoggerModel } from './logger.model';
import { LoggerService } from './logger.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
export class AppComponent {
  title = 'app';
  
 
  data:LoggerModel[];
  list:LoggerModel;

  //fuction to add the data to array
  onAdd() {
    this.loggerservice.onAddData(this.list)
  }

  constructor(private loggerservice:LoggerService){}

// this is were all data is been copied to data array from service array and then show on to the html page 

ngOnInit() {

  this.data=this.loggerservice.getData();
}
  
}
