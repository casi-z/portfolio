import { API_GIT_BASE_URL, API_GIT_USER } from "../../constants"

export class getPages {
    constructor(
        httpClient
    ) {
        this.httpClient = httpClient
    }
   
    async get(repoName) {
        const url = `${API_GIT_BASE_URL}/repos/${API_GIT_USER}/${repoName}/pages`
        console.log('url:', url)
        return await this.httpClient.get(url)
    }
}//