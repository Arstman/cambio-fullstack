import {
	Directus
} from '@directus/sdk';
import 'dotenv/config';

const client = new Directus(process.env.VITE_DIRECTUS_URL);

async function getClient() {
	//if (client.auth.token) return directus;

	try {
		if (process.env.DIRECTUS_STATIC_TOKEN) {
			await client.auth.static(process.env.STATIC_TOKEN);
		} else if (process.env.DIRECTUS_EMAIL && process.env.DIRECTUS_PASSWORD) {
			await client.auth.login({
				email: process.env.DIRECTUS_EMAIL,
				password: process.env.DIRECTUS_PASSWORD
			});
		}
	} catch (err) {
		if (err.parent.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
	}

	return client;
}

export {
	getClient
};