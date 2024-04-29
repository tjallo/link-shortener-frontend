import { login } from "$lib/server/login";
import type { LoginRequestForm } from "$lib/types/serverside_types";
import type { Actions } from "./$types";

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get("username");
		const password = data.get("password");

		if (username === null || password === null) {
			// Do sth
			return;
		}

		const validRequestForm = typeof username === "string" && typeof password === "string";
		if (!validRequestForm) {
			return;
		}

		const loginRequestForm: LoginRequestForm = { username, password };

		login(loginRequestForm);
	}
} satisfies Actions;
