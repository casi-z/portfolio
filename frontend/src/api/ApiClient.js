import axios from 'axios'
import { HttpError } from './httpError/HttpError'
import { NotFoundHttpError } from './httpError/NotFoundHttpError'

export class ApiClient {
    constructor(
        baseUrl,
        headers,
        authToken = ''
    ) {
        this.baseUrl = baseUrl
        this.headers = headers
        this.authToken = authToken
    }

    async get(endpoint, params, signal) {
        try {
            const client = this.createClient(params)
            const response = await client.get(endpoint, { signal })
            return response.data
        } catch (error) {
            this.handleError(error)
        }
    } 

    async post(endpoint, data, signal) {
        try {
            const client = this.createClient()
            const response = await client.post(endpoint, data, { signal })
            return response.data
        } catch (error) {

        }
    }

    createClient(params = {}) {
        const config = {
            baseURL: this.baseUrl,
            headers: this.headers,
            params: params
        }
        if (this.authToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${this.authToken}`
            }
        }

        return axios.create(config)
    }

    handleError(error) {
        if (!error.response) {
            throw new HttpError(error.response.data.error)
        } else if (error.response.status === 404) {
            throw new NotFoundHttpError(error.response.data.error)
        } else {
            throw new HttpError(error.response.data.error)
        }
    }
}