import { BACKEND_ENDPOINT } from "$env/static/private";
import type { JwtToken, LoginRequestForm, UserInfo } from "$lib/types/serverside_types";
import axios from "axios";

export async function login(loginRequestForm: LoginRequestForm): Promise<UserInfo | null> {
	if (BACKEND_ENDPOINT === undefined || !BACKEND_ENDPOINT) {
		console.debug("Backend endpoint .env var is not set");
		return null;
	}

	const url = BACKEND_ENDPOINT + "/login";

	let res;

	try {
		res = await axios({
			method: "post",
			url: url,
			data: loginRequestForm
		});
	} catch (error) {
		return null;
	}

	const token = res.data.token;
	const isValidToken = typeof token === "string";

	if (!isValidToken) {
		return null;
	}

	let expiryTime = process.env.JWT_EXPIRY_TIME ?? 24 * 60 * 60;
	if (typeof expiryTime === "string") expiryTime = Number.parseInt(expiryTime);

	const expiryOffset = expiryTime * 1000 - 10 * 60 * 1000;

	const userInfo: UserInfo = {
		loggedIn: true,
		jwtToken: token,
		expiry: Date.now() + expiryOffset
	};

	return userInfo;
}
