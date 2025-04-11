import React from 'react'

const AlumniCard = (props) => {

    const handleClick = () => {
        console.log('Card clicked!')
    }

    return (
        <div className='w-48 h-56 bg-white rounded-4xl bg-[url(https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=)] bg-cover bg-center relative cursor-pointer'
            onClick={handleClick}
        >
            <div className='bg-gradient-to-b from-[#0b599900] to-[#0b5999b2] flex flex-col justify-end text-white w-full h-full rounded-4xl px-2 pb-4'>
                <p className='bg-[#bde0fa] w-fit px-2 rounded-full text-[#0d4d7f] text-xs font-medium'>2027</p>
                <p className='text-4xl font-semibold'>Alumni Name</p>
            </div>
        </div>
    )
}

export default AlumniCard
