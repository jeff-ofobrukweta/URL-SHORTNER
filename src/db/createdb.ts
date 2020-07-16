import { UserModel } from './model/users.model';
import { connect, disconnect } from './database'


export async function Seed ():Promise<void>{
  // await connect()
  const users = [
    { firstName: 'Emma', lastName: 'Bradley', age: 34, longUrl:'https://google.com.ng.lag', shortUrl:'https://google.com/123234rt' },
    { firstName: 'Ese', lastName: 'Victor', age: 4, longUrl:'https://google.com.ng.lag', shortUrl:'https://google.com/123234rt' },
    { firstName: 'Johson', lastName: 'Ben', age: 34, longUrl:'https://google.com.ng.lag', shortUrl:'https://google.com/123234rt' },
    { firstName: 'Von', lastName: 'Nelson', age: 34, longUrl:'https://google.com.ng.lag', shortUrl:'https://google.com/123234rt' },
    { firstName: 'Cola', lastName: 'Binm', age: 34, longUrl:'https://google.com.ng.lag', shortUrl:'https://google.com/123234rt' },
    { firstName: 'Fow', lastName: 'Kim', age: 34, longUrl:'https://uiuiu.com.ng.lag', shortUrl:'https://uiuiu.com/123234rt' },
    { firstName: 'Jeff', lastName: 'Dean', age: 34, longUrl:'https://google.com.ng.lag', shortUrl:'https://google.com/123234rt' },
    { firstName: 'Richard', lastName: 'Johnson', age: 34, longUrl:'https://House.com.ng.lag', shortUrl:'https://House.com/123234rt' },
  ]
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.firstName} ${user.lastName}`)
    }
    await disconnect()
  } catch (e) {
    console.error(e)
  }
};