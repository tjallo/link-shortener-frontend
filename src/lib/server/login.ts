import type { JwtToken, LoginRequestForm } from "$lib/types/serverside_types";
import axios from "axios";
import { userInfoStore } from "./stores";

export async function login(loginRequestForm: LoginRequestForm): Promise<boolean> {
	const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT;
	if (BACKEND_ENDPOINT === undefined || !BACKEND_ENDPOINT) {
		console.debug("Backend endpoint .env var is not set");
		return false;
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
		return false;
	}

	const token = res.data.token;
	const isValidToken = typeof token === "string";

	if (!isValidToken) {
		return false;
	}

	let expiryTime = process.env.JWT_EXPIRY_TIME ?? 24 * 60 * 60;
	if (typeof expiryTime === "string") expiryTime = Number.parseInt(expiryTime);

	const expiryOffset = expiryTime * 1000 - 10 * 60 * 1000;

	userInfoStore.set({
		loggedIn: true,
		jwtToken: token,
		expiry: Date.now() + expiryOffset
	});

	return true;
}
