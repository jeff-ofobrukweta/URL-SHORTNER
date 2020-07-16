
import { UserModel } from '../db/model/users.model'
import faker from 'faker'

describe('User API', () => {
    it('find user', () => {
        async () => {
            const userData = {
                firstName: faker.name.findName(),
                lastName: faker.name.lastName(),
                age: 80,
            }
            const user = await UserModel.find(userData)
            expect(user).toEqual(userData)
        }
      })


      it('add the sum', async ()=>{
          expect(2+2).toEqual(4)
      })
})