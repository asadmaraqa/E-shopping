// @ts-ignore
import GoogleStrategy from 'passport-google-id-token'

import User, { UserDocument } from '../models/User'
import UserService from '../services/user'

const loginWithGoogle = () => {
  return new GoogleStrategy(
    // {
    //   the clientId is optional in this case
    //   cliendID: process.env.GOOGLE_CLIENT_ID,
    // },
    async (
      parsedToken: {
        payload: { given_name: string; family_name: string; email: string }
      },
      googleID: string,
      done: Function
    ) => {
      try {
        let userTest = await UserService.findOne(parsedToken.payload.email)
        console.log('isUserExists:', !!userTest)
        if (!userTest) {
          userTest = {
            firstName: parsedToken.payload.given_name,
            secondName: parsedToken.payload.family_name,
            email: parsedToken.payload.email,
          } as unknown as UserDocument

          const newUser = new User(userTest)
          await UserService.save(newUser)
        }
        // Append user object to req.user
        done(null, userTest)
      } catch (error) {
        done(error)
      }
    }
  )
}

export default loginWithGoogle
