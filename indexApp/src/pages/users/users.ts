import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user'; /* 모델 임포트*/
import { GithubUsers } from '../../providers/github-users'; /* 정의된 프로바이더 임포트 */

import { UserDetailsPage } from '../user-details/user-details'; /* 유저디테일 임포트*/

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[] /* 배열 정의*/

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => { /* 로드해서 반환되는 값을 users에 주입*/
      console.log(users); /* users 어레이 콘솔 테스트*/
      /* @ 결과 Array[30] 개 넘어옴 */
      this.users = users; /* users 데이터주입함 */
    })

    githubUsers.searchUsers('scotch').subscribe(users => {
      console.log('서치 : ' + users); /* 콘솔 찍어봄*/
    });
  }
  
  goToDetails(login: string){
    this.navCtrl.push(UserDetailsPage, {login}); /* 매개로 받고 푸쉬함*/
  }

  ionViewDidLoad() {
    console.log('Hello UsersPage Page');
  }

}
