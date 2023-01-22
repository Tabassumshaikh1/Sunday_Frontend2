import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'ngx-manageroleandper',
  templateUrl: './manageroleandper.component.html',
  styleUrls: ['./manageroleandper.component.scss']
})
export class ManageroleandperComponent implements OnInit {
userlist:any
  constructor(private ser :UserAuthService) { }

  ngOnInit(): void {
    console.log("ngoninit is call")
    this.ser.GetModuleList().subscribe((res:any)=>{
      console.log(res)
      this.userlist=res
      console.log(this.userlist)
    })

  }

}
