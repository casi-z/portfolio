import { API_GIT_BASE_CD_URL, token } from "../../constants"
import { ApiClientFactory } from "../../ApiClientFactory"
import { getPages } from "./getPages"

export default function makeGetPages() {
    const httpClient = new ApiClientFactory(API_GIT_BASE_CD_URL, {}).createAuthClient(token)
    return new getPages(httpClient)
}
