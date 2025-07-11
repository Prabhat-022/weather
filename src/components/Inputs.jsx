import React from 'react'
// import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'

const Inputs = ({ setquery, units, setunits }) => {
    console.assert(setquery)
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input type='text' placeholder='search for city......' className='text-xl font-light p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase' onChange={(e) => { setquery({ q: e.target.value }) }} />

                <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />

                <UilMapMarker size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />


            </div>
            <div className=" flex flex-row w-1/4 items-center justify-center">
                <button name='metric' className='text-xl text-white font-light' onClick={(e)=>{setunits(e.target.value)}}>°C</button>
                
                <p className='text-white text-xl mr-1 ml-1'>|</p>
                <button name='metric' className='text-xl text-white font-light'>F</button>
            </div>
        </div>
    )
}

export default Inputs;
