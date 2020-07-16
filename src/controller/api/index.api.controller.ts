import { ApiController } from './abstract.api.controller'
import { Base64 } from '../../config/utillity/utility.urshortner'
import { UserModel } from '../../db/model/users.model'


class UrlShortner extends ApiController {
    constructor() {
        super() // constructors in derived classes must call super()
    }

    readOption() {
        return async (req: any, res: any, next: any) => {
            try {
                const result = await UserModel.find()
                await res.json({ result })
            } catch (err) {
                throw new Error(err)
            }
        }
    }

    createOption() {
        return async (req: any, res: any, next: any) => {
            try {
                const baseUrl = 'https://pbid.io/'
                req.body.shortUrl = baseUrl + new Base64().encode()
                const result = await UserModel.create(req.body)
                await res.json({ result })
                next()
            } catch (err) {
                throw new Error(err)
            }
        }
        return
    }
    updateOption() {
        console.log('Generating url reports...')
        return async () => {

        }
    }
    deleteOption(): void {
        console.log('Deleting url reports...')
        return
    }
}

export default UrlShortner