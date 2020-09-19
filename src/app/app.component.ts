import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { IAccunt } from './Accuntinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit {
  title = 'ServicesPart1-pro';
  message = 'Hi World!';
 
  constructor(private logInMessage: LoggingService){
    this.logInMessage.logMessage (this.message);
  }

  ngOnInit(){    
    // Services used in defferent cases such as case that multiple used in several point of project, or in case of call info from backend
  }
}
