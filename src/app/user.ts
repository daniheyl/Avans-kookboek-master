import { isVariableDeclaration } from "typescript";

export class user {

	public name: string;
	public email: string;
	public id: number;
	public dateOfBirth: Date;
	public isActive: Boolean;

	constructor(name:string,email:string,id:number,dateOfBirth: Date,isActive: Boolean) {
		this.name = name;
		this.id = id;
		this.dateOfBirth = dateOfBirth;
		this.isActive = isActive;
		this.email = email;
	}
}


