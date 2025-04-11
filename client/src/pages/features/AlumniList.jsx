import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import AlumniCard from '../../components/AlumniList/AlumniCard'

const AlumniList = () => {

    const [searchFilter, setSearchFilter] = useState('')

    const handleSearch = () => {
        console.log(searchFilter)
    }

    return (
        // Main component for Alumni List
        <div className='w-full h-full flex gap-3'>

            {/* Left Division : Filter */}
            <div className='h-full w-1/5 flex flex-col px-4 py-2'>
                <p className=''>Apply Filters:</p>

                <div className='bg-white w-full px-3 py-2 flex flex-col gap-4 mt-5'>
                    {/* Search by keyword filter */}
                    <div className='w-full flex justify-around items-center'>
                        <input
                            type="text"
                            name="searchFilter"
                            placeholder='Search Alumni Name: '
                            className='border border-gray-300 py-1 px-4 rounded-l-full' onChange={(e) => { setSearchFilter(e.target.value) }}
                        />
                        <button className='bg-[#0b5a99] py-2 px-2 hover:cursor-pointer rounded-r-full' onClick={handleSearch}>
                            <FaSearch color='white' />
                        </button>
                    </div>

                    {/* Filters by categories */}
                    <div className='flex flex-col gap-3'>
                        <p className='bg-gray-300 py-2 px-4 border-l-4 border-l-[#0b5a99]'>Year of Passout:</p>
                        <p className='bg-gray-300 py-2 px-4 border-l-4 border-l-[#0b5a99]'>Location:</p>
                    </div>
                </div>
            </div>

            {/* Right Division : Alumni List */}
            <div className='bg-gray-100 h-full flex flex-col w-4/5 px-8 py-2'>
                <div className='w-full bg-[#0b5a99] text-white px-4 py-2 text-xl'>
                    List of Alumnis in the community:
                </div>

                {/* Alumni Lists: Card Components */}
                <div className='bg-white h-full w-full px-3 py-2 grid grid-cols-5 gap-4'>
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </div>
            </div>
        </div>
    )
}

export default AlumniList