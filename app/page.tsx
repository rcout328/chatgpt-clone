import Image from 'next/image'
import './globals.css'
import { BellAlertIcon, BoltIcon, ExclamationCircleIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'>
        Chatgpt
      </h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8'/>
            <h2>Examples</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
        </div>  
      </div>
      <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8'/>
            <h2>Capabilities</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
        </div>  
      </div>
      <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8'/>
            <h2>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
            <p className='infoText'>"How to make app using Next.js?"</p>
        </div>  
      </div>
      
    </div>
    </div>
  )
}
