import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <div className=''>
                {/* Navbar */}
                <div className='navBar flex w-full justify-around'>
                    <div className=''>AlumniPortal</div>
                    <div className=''>
                        <ul className='flex gap-5'>
                            <Link to={'/login'} className=''>
                                Login
                            </Link>
                            <Link to={'/register'} className=''>
                                Register
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* About Website */}
                <div className=''>
                    <div className='lcontent'>
                        <div>
                            Alumni Portal
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eius quo deserunt nemo minima, autem reiciendis tenetur asperiores fugit totam temporibus quaerat ullam unde molestias repudiandae tempore laborum, perspiciatis dolore. Laudantium id natus at quasi voluptatibus.
                        </div>
                    </div>
                    <div className='rcontent'>
                        <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
                            <circle r="150" cx="150" cy="150" fill="red" />
                        </svg>

                    </div>
                </div>

                {/* Events Showcase */}
                <div className='bg-black min-h-[500px]'>
                    <div className='text-white'>
                        This section is about Event Showcase
                    </div>
                </div>

                {/* About Univrsity */}
                <div className='min-h-[300px]'>
                    <div>
                        About the university
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum deserunt doloribus quo assumenda, dolor totam ipsum, et molestiae rem, repellat aliquam modi atque necessitatibus quibusdam optio blanditiis hic facilis magnam animi.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
