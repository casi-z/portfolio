import { API_GIT_BASE_URL, API_GIT_USER } from "../../constants"

export class GetUserFollowers {
    constructor(
        httpClient
    ) {
        this.httpClient = httpClient
    }

    async get() {
        const url = `${API_GIT_BASE_URL}/user/followers`
        return await this.httpClient.get(url)
    }
}