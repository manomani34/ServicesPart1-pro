import { Component, OnInit, ViewChild } from '@angular/core';
import { IAccunt } from '../Accuntinterface';
import { AccuntsService } from '../accunts.service';
 
@Component({
  selector: 'app-add-accunt',
  templateUrl: './add-accunt.component.html',
  styleUrls: ['./add-accunt.component.css'],
  providers: [AccuntsService]
})
export class AddAccuntComponent implements OnInit {
  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(private accuntService: AccuntsService) { }

  ngOnInit(): void {
  }
  addNewAccunt(){
    let a: IAccunt = (name: this.username, password: this.password);
  }

}
