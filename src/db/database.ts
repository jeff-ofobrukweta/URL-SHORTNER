import Mongoose from 'mongoose'
import { UserModel } from './model/users.model'


let database: Mongoose.Connection
export const connect = async () => {
    try {
        // add your own uri below
        const uri = 'mongodb+srv://upwork:october3119931@cluster0-bzpdm.mongodb.net/Databasev1?retryWrites=true&w=majority'
        if (database) {
            return
        }
        await Mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        database = Mongoose.connection

        database.once('open', () => {
            console.log('Connected to database')
        })

        database.on('error', () => {
            console.log('Error connecting to database')
        })

        return {
            UserModel,
        }

    } catch (err) {
        throw new Error(err)
    }
};
export const disconnect = async () => {
    try {
        if (!database) {
            return
        }
        await Mongoose.disconnect()

    } catch (err) {
        throw new Error(err)
    }
};