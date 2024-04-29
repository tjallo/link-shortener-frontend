import { configDotenv } from "dotenv";

export function init() {
	console.log("Starting init process");

	configDotenv();
}
