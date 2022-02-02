import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate! : Date;
 loading = false;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  onNoClick() {

  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime(); 
     this.loading = true;
    console.log('userData:', this.user);
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => { 
      setTimeout(() =>  {this.loading = false;}, 800);
      console.log('This user added:', result);
    });
   
  }

}
