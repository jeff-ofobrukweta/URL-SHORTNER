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

                // Declaring variable
                const resPerPage = 10 // results per page
                const page = Number(req.query.page) || 1 // Page defensive programming here

                if (!(page <= 0)) {
                    const result = await UserModel.find()
                        .skip((resPerPage * page) - resPerPage)
                        .limit(resPerPage)
                    // Count how many products were found
                    const numOfRecords = await UserModel.countDocuments({});

                    res.status(200).send({
                        records: result,
                        currentPage: page,
                        pages: Math.ceil(numOfRecords / resPerPage),
                        numOfResults: numOfRecords,
                    })
                }
                return
            } catch (err) {
                res.status(500).send({ message: err, internalcode: '00' })
                return
            }
            return
        }
    }

    createOption() {
        return async (req: any, res: any, next: any) => {
            try {
                if (req.body.longUrl) {
                    req.body.shortUrl = `https://pbid.io/${new Base64().encode()}`
                    const result = await UserModel.create(req.body)
                    const appendedmessage = { message: 'Created successfully', internalcode:101 }
                    await res.status(201).send({result, appendedmessage })
                    next()
                    return
                }
                return
            } catch (err) {
                res.status(500).send({ message: err, internalcode: '00' })
                throw new Error(err)
            }
        }
    }

    deleteOption() {
        return async (req: any, res: any, next: any) => {
            try {
                await UserModel.findByIdAndRemove(req.query.id, (err) => {
                    if (err) return next(err);
                    res.status(201).send({
                        message: 'Deleted Report successfully!',
                        internalcode: '01',
                    });
                    next()
                    return
                })
                return
            } catch (err) {
                res.status(500).send({ message: err, internalcode: '00' })
                throw new Error(err)
            }
        }
    }
}

export default UrlShortner