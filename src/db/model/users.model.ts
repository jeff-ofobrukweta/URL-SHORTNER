import { model } from 'mongoose'
import UserSchema from '../schema/users.schema'

import { IUserDocument, IUserModel } from '../types/users.types'
import Mongoose from 'mongoose'

export const UserModel = Mongoose.model<IUserDocument>(
    'user',
    UserSchema
  ) as IUserModel