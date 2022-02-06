import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

userId: any = '';
user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('userId:', this.userId);
      this.getUser();
    })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc( this.userId)     //get one element from "users" in DB wit the Id from "userId"
    .valueChanges('userId')
    .subscribe((userDB: any) => {
      this.user = new User(userDB);  //get the user-JSON from DB and fill with it the object "User" in the var user
      console.log('Retrieved user:', this.user); 
    });
  }

editMenu() {

}

editUserDetail() {
  
}

} 


