import React, {useState} from 'react'
import { motion, useDragControls } from 'framer-motion';
import { XCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
import {BounceLoader} from 'react-spinners'

  
export default function Contact({activate, close, active}) {
    const controls = useDragControls()

    function startDrag(event: any) {
        controls.start(event)
    }
    function submitForm(event: React.SyntheticEvent) {
        event.preventDefault();
        setLoading(true)
        axios.post('/api/contact', {
            name, email, message
        }).then ((res) => {
            if (res.status === 200) {
                setTimeout(() => {
                    setLoading(false)
                    setSuccess(true)
                }, 1000)
            } else {
                console.log(res.status)
            }
        }).catch (err => {
            console.log(err)
            setSuccess(false)
        })
    }

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>()

    return (
        <motion.div initial={{scale: 0}} animate={{scale:1}} whileDrag={{scale: 1.05}} drag dragMomentum={false} dragListener={false} dragControls={controls} exit={{scale:0}} className={`${active == "contact" ? "z-50" : "z-10"} absolute w-[35%]`} onMouseDown={activate}>
            <div className='flex flex-col rounded-lg overflow-hidden shadow-lg'>
                <strong onPointerDown={startDrag}><div className='bg-white/80 justify-between flex flex-row dark:bg-gray-700/80 backdrop-blur-sm dark:backdrop-blur-sm py-2 font-semibold'>
                    <span></span>
                    <h2 className='text-center dark:text-gray-100 text-gray-900 pointer-events-none'>Contact</h2>
                    <XCircleIcon onClick={close} className='mr-2 mt-[.15rem] h-5 w-5 cursor-pointer text-gray-900 dark:text-gray-100' />
                </div></strong>
                {success == true ? 
                <div className='bg-green-300 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-5'>
                    <div className='flex items-center justify-center flex-col p-5'>
                        <h1 className='text-white text-8xl font-bold'>Success</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                </div> : success == false ? 
                <div className='bg-red-300 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-5'>

                </div> :
                <div className='bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-5'>
                <div className='flex flex-row items-center justify-center'>
                    
                    <form onSubmit={submitForm} className='w-full px-5'>
                        <div className='flex items-center justify-between'>
                            <input type="text" required placeholder='Name' onChange={(e) => setName(e.target.value)} className='form-text rounded-md my-5 w-1/2 mr-5 border-gray-300 dark:bg-gray-800 dark:border-gray-500'></input>
                            <input type="email" required placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-text rounded-md my-5 w-1/2 border-gray-300 dark:bg-gray-800 dark:border-gray-500'></input>
                        </div>
                        <textarea required onChange={(e) => setMessage(e.target.value)} className='form-text w-full h-64 rounded-md my-5 border-gray-300 dark:bg-gray-800 dark:border-gray-500 resize-none' placeholder='Message'></textarea>
                        <div className='flex justify-center items-center mb-5'>
                            <input type="submit" disabled={loading} className='cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white text-center px-3 py-2 focus:outline-none rounded-lg bg-black dark:bg-gray-100 border-black dark:border-gray-100 border-2 text-gray-100 dark:text-black font-semibold hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white transition ease-in-out duration-200'></input> 
                        </div>
                    </form>
                    
                </div>
            </div>
            }
                
            </div>
        </motion.div>        
      
    )
  }