import type { JwtToken, LoginRequestForm } from "$lib/types/serverside_types";
import axios from "axios";

export async function login(loginRequestForm: LoginRequestForm): Promise<JwtToken | null> {
	const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT;
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

	return token;
}
