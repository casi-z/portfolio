import { API_GIT_REPOS, API_GIT_REPOS_CONTENTS } from "../constants"

export class RemoteRepos {
    constructor(
        httpClient
    ) {
        this.httpClient = httpClient
    }

    async getAll() {
        return await this.httpClient.get(API_GIT_REPOS)
    } 
    
    async getReposContents(name) {
        const url = `${API_GIT_REPOS_CONTENTS}${name}/contents/` 
        return await this.httpClient.get(url)
    }
}