
import Chat from '@/components/Chat'
import Chatinput from '@/components/Chatinput'
import React from 'react'

type props = {
  params:{
      id: string;
  }
}


function ChatPage({params : {id}}: props) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Chat chatid={id} />
      <Chatinput chatid={id}/>
    </div>
  )
}

export default ChatPage
