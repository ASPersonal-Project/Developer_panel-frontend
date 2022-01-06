import React from 'react'

const ExperienceCardItem = ({duration,position,jobType}) => {
    return (
        <div className='grid grid-cols-4'>
            <div className='fontxl col-span-4 md:col-span-1'>{duration}</div>
            <div className='col-span-4 md:col-span-3'>
                <p className='font2xl mb-1'>{position}</p>
                <p className='fontmd'>{jobType}</p>
            </div>
        </div>
    )
}

export default ExperienceCardItem;
