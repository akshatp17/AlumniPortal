import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-center items-center text-2xl font-bold text-[#0b2846] py-3'>
            <div className='flex flex-col items-center justify-center'>
                <p>
                    Alumni Portal
                </p>
                <p className='text-xs text-gray-500'>
                    Connect with your fellow alumni
                </p>
            </div>
        </div>
    )
}

export default Header
