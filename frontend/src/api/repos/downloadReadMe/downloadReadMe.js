import { API_GIT_CONTENT_DOWNLOAD } from "../../constants"

export class DownloadReadMe {
    constructor(
        httpClient
    ) {
        this.httpClient = httpClient
    }
   
    async download(name) {
        const url = `${API_GIT_CONTENT_DOWNLOAD}${name}/master/README.md` 
        return await this.httpClient.get(url)
    }
}