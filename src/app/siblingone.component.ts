import { Component } from "@angular/core";
import { EmployeeService } from './employee.service';

@Component({
    selector : 'app-siblingone',
    template : `
               <p>componentOne: {{user}} </p>
               <input type = "text" [(ngModel)] = "user" />
               <button (click) = "changeUser($event)">clickMe!</button>
    
    `
})

export class SiblingOneComponent {
    user:string;
    constructor(private employeeService : EmployeeService){
    }

    ngOnInit(){
         this.employeeService.employee.subscribe(user=>this.user=user); 
    }

    changeUser(){
        this.employeeService.editUser(this.user);
    }


}