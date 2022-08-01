import {
    getClient
} from '$lib/db/client';
//import 'dotenv/config';

export async function GET() {

    const client = await getClient();

    let response;
    try {
        response = await client.items('navigator').readByQuery({
            fields: ['title', 'is_root', 'id'],
            sort: 'date_created'
        });
    } catch (error) {
        return {
            status: 404
        }
    }
    console.log(response);
    return {
        status: 200,
        headers: {
            'access-control-allow-origin': '*',
        },
        body: {
            life: response.data
        }
    };
}