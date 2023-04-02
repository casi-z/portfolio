export class HttpError extends Error {
    constructor(message) {
        super(message || 'Unexpected error')
        this.name = 'UnexpectedError'
    }
}