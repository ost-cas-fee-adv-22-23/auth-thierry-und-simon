import Image from 'next/image'
import { Inter } from 'next/font/google'
import { signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { type } from 'os';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

type User = {
  name: string;
  email: string;
  image: string;
  token: string;
}

const [user, setUser] = useState<User>();
useEffect(() => {
  const getUser = async () => {
    const response = await fetch('/api/profile');
    const data = await response.json();
    setUser(data.profile);
  };
  getUser();
}, [user]);  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {
        !user && (
          <>
            <div className="flex flex-col items-center justify-center">Singned Out</div>
            <button onClick={() => signIn('zitadel', {
              callbackUrl: 'http://localhost:3000'
            })}>sign in</button>
          </>
        )
      }
      {user && (
        <>
        <div className="flex flex-col items-center justify-center">Signed in</div>
        <h1>{user?.name}</h1>
        <button onClick={() => signOut()}>sign out</button>
        </>
      )}
    </main>
  )
}
