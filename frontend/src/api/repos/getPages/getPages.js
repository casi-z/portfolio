import { API_GIT_BASE_URL, API_GIT_USER } from "../../constants"

export class getPages {
    constructor(
        httpClient
    ) {
        this.httpClient = httpClient
    }
   
    async get(name) {
        const url = "https://api.github.com/repos/casi-z/htmltest/pages"
        console.log('url:', url)
        return await this.httpClient.get(url)
    }
}