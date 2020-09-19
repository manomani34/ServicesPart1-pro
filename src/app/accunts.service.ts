import { Injectable } from '@angular/core';
import { IAccunt } from './Accuntinterface';

@Injectable({
  providedIn: 'root'
})
export class AccuntsService {

  accunt: IAccunt[] = [
    {name: 'foad' , password: '1234'},
    {name: 'ahmad' , password: '5678'},
    {name: 'jack' , password: '23456'}
  ];
  addAccunt(a: IAccunt){
    this.accunt.push(a);
  }
  constructor() { }
}
