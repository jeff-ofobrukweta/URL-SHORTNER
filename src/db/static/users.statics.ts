import { IUserDocument, IUserModel } from '../types/users.types'

export async function findOneOrCreate(this: IUserModel, user:any): Promise<IUserDocument> {

    const record = await this.findOne(user)
    if (record) {
        return record
    } 
    else {
        return await this.create(user) // check this later
    }
}

export async function findByAge(
    this: IUserModel,
    min?: number,
    max?: number
): Promise<IUserDocument[]> {
    return this.find({ age: { $gte: min || 0, $lte: max || Infinity } })
}