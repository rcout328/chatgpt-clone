'use client'

import { Session } from "next-auth"
import { SessionProvider as Provider } from "next-auth/react"

type props ={
    children: React.ReactNode;
    session : Session | null ;
}

export function Sessionprovider({children,session}: props){
    return(
        <Provider>
            {children}
        </Provider>
    );
}