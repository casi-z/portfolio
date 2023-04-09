import { API_GIT_BASE_CD_URL } from "../../constants"
import { ApiClientFactory } from "../../ApiClientFactory"
import { getPages } from "./getPages"

export default function makeGetPages() {
    const httpClient = new ApiClientFactory(API_GIT_BASE_CD_URL, {}).createClient()
    return new getPages(httpClient)
}
