import type { UserInfo } from "$lib/types/serverside_types";
import { writable } from "svelte/store";

export const userInfoStore = writable<UserInfo>({
	loggedIn: false,
	jwtToken: "",
	expiry: -1
});
