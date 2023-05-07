import Image from 'next/image'
import { Inter } from 'next/font/google'
import { signIn, signOut, useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session, status } = useSession();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {
        !session && (
          <>
            <div className="flex flex-col items-center justify-center">Singned Out</div>
            <button onClick={() => signIn('zitadel', {
              callbackUrl: 'http://localhost:3000'
            })}>sign in</button>
          </>
        )
      }
      {session && (
        <>
        <div className="flex flex-col items-center justify-center">Signed in</div>
        <button onClick={() => signOut()}>sign out</button>
        </>
      )}
    </main>
  )
}
