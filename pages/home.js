import React from 'react'
import LoginForm from '../src/components/login/LoginForm'

const Home = () => {
    return (
        <div className='grid grid-cols-3 h-screen'>
            <div className='col-span-2 text-5xl flex justify-center items-center'>Find Developer</div>
            <div className='flex justify-center items-center'>
                <LoginForm/>
            </div>
            
        </div>
    )
}

export default Home
