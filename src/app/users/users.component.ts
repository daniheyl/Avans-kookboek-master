import { Component, OnInit } from '@angular/core';
import { UserEditService } from '../mock-users';
import { user } from 'src/app/user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users:user[];
  selectedUser?: user;
  addUserForm = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		dateOfBirth: new FormControl('')
	});

  constructor(private userService:UserEditService, private userEditService: UserEditService) {
		this.users =userService.getUsers();
	}
  ngOnInit(): void {
  }

  onSelect(user: user): void{
    this.selectedUser = user;
  }

  delete(id:number) : void{
		this.userService.deleteUser(id);
	}
  
  onSubmit(): void {
		console.log("aangeroepen");

		this.userEditService.createUser(this.addUserForm.value);
		console.log(this.addUserForm.value);
	}
 
}
