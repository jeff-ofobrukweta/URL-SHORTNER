import { Schema } from 'mongoose'
import { findOneOrCreate, findByAge } from '../static/users.statics'
import { setLastUpdated, sameLastName } from '../method/users.methods'

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  shortUrl:String,
  longUrl:String,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
})



// using mongoose statics and method here 
UserSchema.statics.findOneOrCreate = findOneOrCreate
UserSchema.statics.findByAge = findByAge
UserSchema.methods.setLastUpdated = setLastUpdated
UserSchema.methods.sameLastName = sameLastName
export default UserSchema