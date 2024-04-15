'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { Session } from "next-auth"

interface CustomSession extends Session {
  user: {
    email: string;
    name: string;
    image: string;
    role: string;
  }
}

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {(session.user as CustomSession['user']).email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
