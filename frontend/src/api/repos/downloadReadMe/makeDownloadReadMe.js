import { API_GIT_BASE_CD_URL } from "../../constants"
import { ApiClientFactory } from "../../ApiClientFactory"
import { DownloadReadMe } from "./downloadReadMe"

export default function makeDownloadReadMe() {
    const httpClient = new ApiClientFactory(API_GIT_BASE_CD_URL, {}).createClient()
    return new DownloadReadMe(httpClient)
}