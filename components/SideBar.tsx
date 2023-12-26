'use client'
import React from 'react'
import NewChat from './NewChat'
import { useSession } from 'next-auth/react'
import {useCollection} from 'react-firebase-hooks/firestore'
import { signOut } from 'next-auth/react'
import { collection } from 'firebase/firestore'
import { db } from '../firebase'
import ChatRow from './ChatRow'
function SideBar() {
    const {data:session}=useSession();
    const [chats,loading,errors]=useCollection(
        session && collection(db, 'users', session?.user?.email!, 'chats'),
        )
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className="flex-1">
            <div>
                <NewChat/>
            </div>
            <div>
                {chats?.docs.map(chats =>(
                    <ChatRow key={chats.id} id={chats.id}/>
                ))}
            </div>
        </div>
        {session && (
            <div className='rounded-full p-4'>  <img 
            onClick={() => signOut()}
            src={session.user?.image!} alt='toto' className='cursor rounded-full cursor-pointer mx-auto hover:opacity-50
            mb-2'/></div>
          
           
        )}
         <p className="text-xs font-bold ">exit</p>
    </div>
  )
}

export default SideBar