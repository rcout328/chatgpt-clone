import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname , useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type props={
    id: string;
}

function Chatrow({id}:props) {  

    const pathname = usePathname();
    const router = useRouter();
    const {data: Session} = useSession();
    const [active,setActive] = useState(false);


    const [messages] = useCollection(
        collection(db,'users',Session?.user?.email!,'chats',id,'messages'),
    );
    
    useEffect(() => {
        if(!pathname) return;

        setActive(pathname.includes(id));
    },[pathname]);

    const removechat = async () => {
        await deleteDoc(doc(db,"users",Session?.user?.email!,"chats",id));
        router.replace("/");
    }
  return (
    <Link
    href={`/chat/${id}`}
    className={`justify-center chatRow ${active && "bg-gray-700/50" }`}
    >
        <ChatBubbleLeftIcon className="h-5 w-5"/>
        <p className="flex-1 hidden md:inline-flex truncate">
            {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat '}
        </p>
        <TrashIcon onClick={removechat} className="h-5 w-5 text-gray-700 hover:text-red-700"/>
    </Link>
  )
}

export default Chatrow
