import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Injectable } from '@angular/core';
import { user } from 'src/app/user';

@Injectable({
	providedIn: 'root'
})
export class UserEditService {

	users: user[] = [
		{
			name: "Rico",
			id: 1,
			dateOfBirth: new Date(1900, 8, 24),
			isActive: true,
			email: "Rikkie@gmail.com"
		},
    {
			name: "Dani",
			id: 2,
			dateOfBirth: new Date(2000, 8, 24),
			isActive: true,
			email: "Dani@outlook.com"
		},
    {
			name: "Maurice",
			id: 3,
			dateOfBirth: new Date(2000, 8, 24),
			isActive: true,
			email: "Maurice@live.com"
		},
    {
			name: "Luuk",
			id: 4,
			dateOfBirth: new Date(2000, 8, 24),
			isActive: true,
			email: "Luuk@yahoo.com"
		}
  ];

	constructor() {
		console.log("constructor van UserService is aangeroepen");
	}

	getUserById(id: number): user {
		return this.users.filter(user => user.id == id)[0];
	}

	getUsers(): user[] {
		return this.users;
	}

	createUser(param: user): void {
		param.id = this.users.length;
		param.isActive = true;
		this.users.push(param);
	}
	deleteUser(id: number): void {
		console.log(this.users.filter(user => user.id == id));
		var index: number = this.users.indexOf(this.users.filter(user => user.id == id)[0]);
		this.users.splice(index, 1);
	}
	updateUser(param: user, id: number): void {
		if(param.name != null){
			this.users.filter(user => user.id == id)[0].name = param.name;
		}
		if(param.email != null){
			this.users.filter(user => user.id == id)[0].email = param.email;
		}
		if(param.email != null){
			this.users.filter(user => user.id == id)[0].dateOfBirth = param.dateOfBirth;
		}
	}
}
