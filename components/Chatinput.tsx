'use client'
import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Session } from 'inspector';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';

type props = {
    chatid: string;
}
function Chatinput({chatid} : props) {
    const [prompt,setPrompt] = useState("");
    const {data: session} = useSession();

    const model ="text-davinci-003"
    const sendMessage = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user:{
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }
        await addDoc(collection(db,'users',session?.user?.email!,'chats',chatid,'messages'),
            message
        );


        const notification = toast.loading('Chatgpt is thinking...');
        await fetch('/api/askQuestion',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input,chatid,model,session
            }),
       }).then(()=> {
            toast.success('Chatgpt has responded!',{
                id:notification,
                
            })
       });

       };
    
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
      <form  onSubmit={sendMessage} className='p-5 space-x-5 flex'>
        <input className="bg-transparent focus-outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300" disabled={!session}value={prompt} onChange={(e) => setPrompt(e.target.value)} type="text" placeholder='Type your message here..'>
        </input>
        <button disabled={!prompt || !session} className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed" type="submit"><PaperAirplaneIcon className='h-4 w-4 -rotate-45'/></button>
      </form>
    </div>
  )
}

export default Chatinput
