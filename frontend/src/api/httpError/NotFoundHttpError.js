export class NotFoundHttpError extends Error {
    constructor(message) {
        super(message || 'Not found error')
        this.name = 'NotFoundHttpError'
    }
}