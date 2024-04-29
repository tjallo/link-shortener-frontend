import { BACKEND_ENDPOINT } from "$env/static/private";
import type { JwtToken } from "$lib/types/serverside_types";
import axios from "axios";

export class LinkshortenerMethods {
	public static async getAll(token: JwtToken) {
		if (BACKEND_ENDPOINT === undefined || !BACKEND_ENDPOINT) {
			console.debug("Backend endpoint .env var is not set");
			return null;
		}

		const url = BACKEND_ENDPOINT + "/getAll";

		let res;

		try {
			res = await axios({
				method: "GET",
				url: url,
				headers: {
					token: token
				}
			});
		} catch (error) {
			return null;
		}

		return res.data;
	}
}
