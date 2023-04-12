import React from 'react'
import { motion, useDragControls } from 'framer-motion';
import { XCircleIcon } from '@heroicons/react/solid';
export default function Portfolio({activate, close, active}) {
    const controls = useDragControls()

    function startDrag(event) {
        controls.start(event)
    }
    return (
        
        <motion.div initial={{scale: 0}} animate={{scale:1}} whileDrag={{scale: 1.05}} drag dragMomentum={false} dragListener={false} dragControls={controls} exit={{scale:0}} className={`${active == "portfolio" ? "z-50" : "z-10"} absolute w-1/3`} onMouseDown={activate}>
            <div className='flex flex-col rounded-md overflow-hidden shadow-lg'>
                <strong onPointerDown={startDrag}><div className='bg-white/80 justify-between flex flex-row dark:bg-gray-700/80 backdrop-blur-sm dark:backdrop-blur-sm py-2 font-semibold'>
                    <span></span>
                    <h2 className='text-center dark:text-gray-100 text-gray-900'>Portfolio</h2>
                    <XCircleIcon onClick={close} className='mr-2 mt-[.15rem] h-5 w-5 cursor-pointer text-gray-900 dark:text-gray-100' />
                </div></strong>
                <div className='bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-5'>
                    port
                </div>
            </div>
        </motion.div>        
      
    )
  }