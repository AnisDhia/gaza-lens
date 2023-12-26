import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
function NewChat() {
    const router=useRouter();
    const {data:session}=useSession();
    const createNewChat=async ()=>{
        const doc =await addDoc(collection(db,"users",session?.user?.email!,"chats"),{
            userId:session?.user?.email!,
            createdAt:serverTimestamp()
        });
        router.push(`/chat/${doc.id}`);
    }
  return (
    <div onClick={createNewChat} className='rounded-lg px-10 gap-2 py-3 text-sm flex items-center justify-center space-x-2
    hover:bg-gray-700/70 cursor-pointer text-gray-300'>
        <PlusIcon className='h-4 w-4'/>
        <p className="">new chatt</p>
    </div>
  )
}

export default NewChat