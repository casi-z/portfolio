import { ApiClient } from "./ApiClient";

export class ApiClientFactory {
    constructor(
        baseUrl,
        headers
    ) {
        this.baseUrl = baseUrl
        this.headers = headers
    }

    createClient() {
        return new ApiClient(this.baseUrl, this.headers)
    }

    createAuthClient(authToken) {
        return new ApiClient(this.baseUrl, this.headers, authToken)
    }
}