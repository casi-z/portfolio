import { ApiClientFactory } from "../ApiClientFactory"
import { API_GIT_BASE_URL, token } from "../constants"
import { RemoteRepos } from "./remoteRepos"

export default function makeRemoteRepos() {
    const httpClient = new ApiClientFactory(API_GIT_BASE_URL, {}).createClient()
    return new RemoteRepos(httpClient)
}