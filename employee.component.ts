import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:number =0;
  constructor(private route: ActivatedRoute) { 
    console.log("hrllo");
    this.route.params.subscribe(params => {this.id = +params['id'];});
    console.log ("ID value is : "+this.id);
   
}
  emp: Employee[]=[
    new Employee(10,"Vineela","IT",21),
    new Employee(21,"Ramesh","IT",30),
    new Employee(30,"Abhay","Sales",25),
    new Employee(40,"John","HR",40),
    new Employee(25,"Rahul","Marketing",34)
  ]
  flag:number=0;
  l:number=0;
  ngOnInit(): void {
    console.log("hello");
    for (let index = 0; index < this.emp.length; index++) {
    
      if(this.id==this.emp[index].id){
       this.flag=1;
      this.l=index}
    }
    this.name=this.emp[this.l].name;
    this.id=this.emp[this.l].id;
    this.dept=this.emp[this.l].dept;
    this.age=this.emp[this.l].age;
  }
  name:string;
  dept:string;
  age:number;
 
getdetails(){
  
}

}
