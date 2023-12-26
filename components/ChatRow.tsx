import React, { useState } from 'react'
import Link from "next/link";
import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
type Props={
    id:string;
}

function ChatRow({id}:Props) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session} = useSession()
    const [active, setActive] = useState(false);

    const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats"),
    );
  return (
    <Link href={`/chat/${id}`} className='flex justify center'>
        <p className="">{
            messages?.docs[messages?.docs.length - 1]?.data().text || "new discussio"
        }</p>
    </Link>
  )
}

export default ChatRow