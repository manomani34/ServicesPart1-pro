import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { IAccunt } from './Accuntinterface';
import { AccuntsService } from './accunts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ServicesPart1-pro';
  message = 'Hi World!';
  accunts:IAccunt []= [];
 
  constructor(private logInMessage: LoggingService , private accuntService: AccuntsService){
    this.logInMessage.logMessage (this.message);
  }

  ngOnInit(){    
    // Services used in defferent cases such as case that multiple used in several point of project, or in case of call info from backend
    this.accunts = this.accuntService.accunt;
  }
}
