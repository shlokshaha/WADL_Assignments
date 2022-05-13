import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  username = '';
  password='';

  userList=[
    {
      name:'Shlok',
      pass:'123456'
    },
    {
      name:'John',
      pass:'123456'
    }
  ]

  handleAdd=()=>{
      let temp={name:this.username,pass:this.password}
      this.userList.push(temp);
  }




  ngOnInit(): void {
  }

}
