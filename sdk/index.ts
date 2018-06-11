interface Address {
  line1: string
  city: string
  zip: number
}

interface User {
  name: string
  age: number
  email: string
  newsletter: 'daily' | 'weekly' | 'monthly'
  address: Address
}

interface TokenResponse {
  user: User
  token: string
}

export const createUser = (user: User): Promise<TokenResponse> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ user, token: 'jwt.token' })
    }, 1000)
  })
