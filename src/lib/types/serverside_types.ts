export type LoginRequestForm = {
	username: string;
	password: string;
};

export type JwtToken = string;

export interface UserInfo {
	loggedIn: boolean;
	jwtToken: string;
	expiry: number;
}
