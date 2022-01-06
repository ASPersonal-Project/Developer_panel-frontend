import React from 'react'
import DeveloperCard from '../src/components/developer/DeveloperCard';
import MainLayout from '../src/layouts/MainLayout';

const Developer = () => {
    const aa = [1,2,3,4,5,6,7,8,9];
    return (
        <MainLayout>
            <div className='m-3'>
        <div className='grid grid-cols-5'>
          { aa.map( a => {
               return(
                   <div className='flex justify-center items-center my-3'>
                       <DeveloperCard/>
                   </div>
               )
           })}
        </div>
        </div>
        </MainLayout>
    )
}

export default Developer;
