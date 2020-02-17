import { Injectable } from '@angular/core';

import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { of }from 'rxjs';
import { map, catchError }from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator{

    constructor( private authService: AuthService){}

    validate =(control: FormControl)  => {
        const {value} = control;
        return this.authService.usernameAvailable(value)
        .pipe(
            map( (value) => {
                if (value.available) return null;
            }),
            catchError( (err) => {
                if (err.error.username){
                    return of({ nonUniqueUsername: true }) // the same new Observable()
                } else {
                    return of({ noConnection_Or_someError: true }) // the same new Observable()
                }
                
            })
        );
    }



    
}
