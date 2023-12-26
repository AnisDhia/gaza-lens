'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'

import React, { FormEvent, useState } from 'react'
import { db } from '../firebase'

type Props = {
    chatId: string
}

function ChatInput({chatId}: Props) {
    const [prompt,setPrompt] = useState("");
    const {data:session} = useSession()
    const sendMessage = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!prompt)return;
            const input =prompt.trim();
            setPrompt("");
            const message:Message={
                text:input,
                createdAt:serverTimestamp(),
                user:{
                    _id:session?.user?.email!,
                    name:session?.user?.name!,
                    avatar:session?.user?.image!
                }
            }
            await addDoc(collection( db,'users',session?.user?.email!,'chats',chatId,'messages'),
            message
            )

        
    }
  return (
    
    <div className=' bg-gray-700/50 text-gray-400 text-sm p-4  '>
        <form onClick={sendMessage}className='p-2 space-x-5 flex-1 flex justify-center items-center w-3/4' >
            <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}
            disabled={!session}
            placeholder='What do you want to know about the palestine war'
            className='bg-transparent  focus:oultine-none flex-1 rounded-3xl p-4 w-3/4 disabled:cursor-not-allowed disabled:text-gray-400'/>
            <button disabled={!prompt || !session}type='submit'> 
                <PaperAirplaneIcon className='h-8 w-8 -rotate-45'></PaperAirplaneIcon>
            </button>
        </form>
        
    </div>
  )
}

export default ChatInput