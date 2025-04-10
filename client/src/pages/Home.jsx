import { UserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='flex justify-around py-5'>
                <div>This is home page</div>
                <Link to={'/user'} className="flex gap-2 bg-gray-800 text-white px-4 py-1 rounded-md text-sm">
                    <UserRound size={18} />
                    YourProfile
                </Link>
            </div>
        </>

    )
}

export default Home