import { useState } from "react"

type UserType = {
    name: string
    email: string
}

const User = () => {
    // const [user] = useState<UserType | null>(null)

    // using type assertion
    const [user] = useState<UserType>({} as UserType)

  return (
    <div>
      {/* <h1>This is the users name: {user?.name}</h1>
      <h1>This is the users email: {user?.email}</h1> */}

      <h1>This is the users name: {user.name}</h1>
      <h1>This is the users email: {user.email}</h1>
    </div>
  )
}

export default User
