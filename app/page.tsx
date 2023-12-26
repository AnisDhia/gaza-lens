import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React from 'react'

function page() {
  return ( 
    <div className="bg-gray-700/50 text-gray-400 rounded-xl text-sm p-4 w-3/4 ">
         <div className=''>
                    <input type="text"
                    placeholder='want to know about the palestine war
                     to know about the palestine war'
            
                    className='bg-transaprent focus:oultine-none flex-1 rounded-3xl p-4 w-3/4'/>
        </div>   
        <div className=''>
                    <input type="text"
                    placeholder='What do you want to know about the palestine war
                    What do you want to know about the palestine war
                    What do you want to know about the palestine war
                    What do you want to know about the palestine war
                    What do you want to know about the palestine war'
                    className='bg-transaprent focus:oultine-none flex-1 rounded-3xl p-4 w-3/4'/>
        </div>   
        <div className=''>
                <form className='space-x-5 flex-1 flex items-center justify-center '>
                    <PaperAirplaneIcon className='h-8 w-8 -rotate-45'></PaperAirplaneIcon>
                    <input type="text"
                    placeholder='What do you want to know about the palestine war'
                    className='bg-transaprent focus:oultine-none flex-1 rounded-3xl p-4 w-3/4'/>
                    <button type='submit'>
                        <PaperAirplaneIcon className='h-8 w-8 -rotate-45'></PaperAirplaneIcon>
                    </button>
                </form>
        </div>   
       
    </div>    
  )
}

export default page