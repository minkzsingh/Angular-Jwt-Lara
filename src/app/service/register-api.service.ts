import { Injectable } from '@angular/core';
import { Configuration } from '../Config/configuration';
@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(private config: Configuration) { 

  }
}
