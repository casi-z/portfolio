import { ApiClientFactory } from "../../ApiClientFactory"
import { API_GIT_BASE_URL, token } from "../../constants"
import { GetUserFollowers } from "./getUserFollowers"

export default function getUserFollowers() {
    const httpClient = new ApiClientFactory(API_GIT_BASE_URL, {}).createAuthClient(token)
    return new GetUserFollowers(httpClient)
}