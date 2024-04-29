import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { LinkshortenerMethods } from "$lib/server/linkshortener_methods";

export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = cookies.get("jwt_token");

	if (token === undefined) {
		redirect(301, "/login");
	}

	const res = await LinkshortenerMethods.getAll(token);

	if (res === null) {
		return { allLinks: [] };
	}

	return res;
};
