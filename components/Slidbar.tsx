'use client'


import { useSession, signOut} from "next-auth/react"
import Newchat from "./Newchat"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Chatrow from "./Chatrow";
function Slidbar() {
    
    const {data : session } = useSession();

    const [chats,loading,error] = useCollection(
        session && query(collection(db,"users",session.user?.email!,"chats"),orderBy("createdAt",'asc')
    )
    );

    
  return (
    <div className="p-4 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/*New chat*/}
                <Newchat/>
            <div>
                { /*Modal selections*/ }
            </div>
            {/* Chat rows */}

            {chats?.docs.map(chat => 
                
                ( 
                    <Chatrow key={chat.id} id={chat.id}/>
                ))}
        </div>
    </div>
    {session && <img onClick={() => signOut()} src={session.user?.image!} alt="Profile pic" className="h-12 w-12 rounded-full mx-auto cursor-pointer mb-2 hover:opacity-50"/>}
    </div>
  )
}

export default Slidbar
