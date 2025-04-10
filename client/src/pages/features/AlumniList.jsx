import React from 'react'
import AlumniCard from '../../components/AlumniList/AlumniCard'

const AlumniList = () => {
    return (
        <div className='w-full h-full flex gap-3'>
            <div className='h-full w-1/5'>

            </div>
            <div className='bg-gray-100 h-full w-4/5 px-3 py-2'>
                This is the alumni list page.
                <AlumniCard />
            </div>
        </div>
    )
}

export default AlumniList