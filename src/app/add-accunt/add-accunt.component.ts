import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAccunt } from '../Accuntinterface';
import { AccuntsService } from '../accunts.service';
 
@Component({
  selector: 'app-add-accunt',
  templateUrl: './add-accunt.component.html',
  styleUrls: ['./add-accunt.component.css']
})
export class AddAccuntComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  constructor(private accuntService: AccuntsService) { }

  ngOnInit(): void {
  }
  addNewAccunt(){
    let a: IAccunt = {name: this.username.nativeElement.value , password: this.password.nativeElement.value};
    this.accuntService.addAccunt(a);
  }

}
