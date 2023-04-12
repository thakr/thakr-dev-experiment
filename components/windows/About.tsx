import React from 'react'
import { motion, useDragControls } from 'framer-motion';
import { XCircleIcon } from '@heroicons/react/solid';

export default function About({activate, close, active}) {
    const controls = useDragControls()

    function startDrag(event) {
        controls.start(event)
    }
    return (
        <motion.div initial={{scale: 0}} animate={{scale:1}} whileDrag={{scale: 1.05}} drag dragMomentum={false} dragListener={false} dragControls={controls} exit={{scale:0}} className={`${active == "about" ? "z-50" : "z-10"} absolute w-1/3`} onMouseDown={activate}>
            <div className='flex flex-col rounded-lg overflow-hidden shadow-lg'>
                <strong onPointerDown={startDrag}><div className='flex justify-between bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm py-2 font-semibold'>
                    <span></span>
                    <h2 className='text-center dark:text-gray-100 text-gray-900'>About</h2>
                    <XCircleIcon onClick={close} className='mr-2 mt-[.15rem] h-5 w-5 cursor-pointer text-gray-900 dark:text-gray-100' />
                </div></strong>
                <div className='bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-5'>
                    <h2 className='font-semibold text-2xl my-2 '>Who am I?</h2>
                    <p className='text-gray-700 dark:text-gray-400'>I'm a 17 year old student who has a passion in creating unique and inventive projects that challenge conventional norms.</p>
                    <h2 className='font-semibold text-2xl my-2 '>What do I do?</h2>
                    <h2 className='font-semibold text-2xl my-2'>How do I do it?</h2>
                </div>
            </div>
        </motion.div>        
      
    )
  }