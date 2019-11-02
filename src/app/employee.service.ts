import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class EmployeeService {
    private user = new BehaviorSubject<string>('kunal');
    employee = this.user.asObservable();
    

    editUser(newUser){
        this.user.next(newUser);
    }
}

