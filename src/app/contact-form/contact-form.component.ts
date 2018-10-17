import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id:1, type:"email"},
    {id:2, type:"phone"}
  ];

  constructor() { }

  ngOnInit() {
  }

  onChange(ngModel){
    console.log('ngModel',ngModel);
    
  }
  onSubmit(form){
    console.log('ngForm',form)
  }

}
