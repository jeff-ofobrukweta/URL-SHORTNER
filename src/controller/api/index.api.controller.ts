import { ApiController } from './abstract.api.controller';
class UrlShortner extends ApiController {

    constructor() {
        super() // constructors in derived classes must call super()
    }

    createOption(): void {
        console.log('The Accounting Department meets each Monday at 10am.')
    }

    readOption() {
        return async (req:any, res:any, next:any) => {
            res.json({
                message: 'Hello World!',
            })
        }
    }
    updateOption(): void {
        console.log('Generating url reports...')
    }
    deleteOption(): void{
        console.log('Deleting url reports...')
    }
}

export default UrlShortner