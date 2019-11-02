import { Component } from "@angular/core";
import {EmployeeService} from "./employee.service";

@Component({
    selector:'app-siblingtwo',
    template:`
             <p>componentTwo: {{user}}</p>
    `
})

export class SiblingTwoComponent {
    user:string;
    constructor(private employeeService : EmployeeService){
    }

    ngOnInit(){
         this.employeeService.employee.subscribe(user=>this.user=user); 
    }

}