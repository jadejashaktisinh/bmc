import type { WPRequest } from "../@types/wp.types.js";

export async function RequestWP(path: string, reqBody: any, method: string, headers: any) {


    let req: WPRequest = {
        method: method
    }

    if (method !== "GET") {
        req.body = JSON.stringify(reqBody)
    }

    if (Object.keys(headers).length !== 0) {
        req.headers = headers
    }
    console.log('res for wordpres =>', path, ' ', req);
    const result = await fetch(process.env.WORDPRESS_URL + path, req)
    console.log('result for wp => ', result);
    const data = await result.json();
    console.log('data for wp => ', data);

    return data;
}