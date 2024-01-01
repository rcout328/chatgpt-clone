'use client'


import { PlusCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { useRouter } from "next/navigation"
import  { useSession } from "next-auth/react"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'

function Newchat() {

    const router = useRouter();
    const {data : session} = useSession();

    const createNewchat = async () =>{
        const doc = await addDoc(
            collection(db,"users",session?.user?.email!,"chats"),{
                message:[],
                userId: session?.user?.email!,
                createdAt: serverTimestamp(),
            }
        );
            router.push(`/chat/${doc.id}`)
    };

  return (
    <div onClick={createNewchat} className="border-gray-700 border chatRow">
        <PlusCircleIcon className='h-4 w-4'/>
        <p>New Chat</p>
    </div>
  )
}

export default Newchat
