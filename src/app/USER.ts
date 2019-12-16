export interface USER {
	id: number;
	userName: string;
	password: string;
	firstName: string;
	lastName: string;
	contactNumber: string;
	role: string;
	resetPassword: boolean;
	resetPasswordDate: Date;
}