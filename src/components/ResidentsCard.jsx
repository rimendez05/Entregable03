import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentsStatus = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500'
}

const ResidentsCard = ({residents}) => {
    const [residentInfo, setresidentInfo] = useState()
   

    useEffect(() => {
        axios.get(residents) 
        .then((res) => setresidentInfo(res.data))
        .catch((err) => console.log(err))
        
    }, [])

  return (
    <article>
        <div className='relative border-green-500 border-4'>
            <img className='w-full' src={residentInfo?.image} alt="" />
            <div className='absolute bottom-4 left-1/2 - -translate-x-1/2 bg-[#020A02CC]/80 text-white p-1 px-2 flex gap-2 items-center'>
                <div className={`w-3 h-3 ${residentsStatus[residentInfo?.status]} rounded-full`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </div>
        <section className='bg-white/70  border-green-500 border-4 p-4 grid row-auto justify-center'>
            <h1 className='font-bold text-green-950'>{residentInfo?.name}</h1>
            <ul>
               <li>
                <span className='text-green-300'>Species: </span>
                <span className='text-green-950'>{residentInfo?.species}</span>
               </li>
               <li>
                <span className='text-green-300'>Origin: </span>
                <span className='text-green-950' >{residentInfo?.origin.name}</span>
               </li>
               <li>
                <span className='text-green-300'>Times appear: </span>
                <span className='text-green-950'>{residentInfo?.episode.length}</span>
               </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentsCard