import React from 'react'

const EducationCardItem = ({duration,degree,place,result}) => {
    return (
            <div className='grid grid-cols-5'>
                <div className='fontxl col-span-5 md:col-span-1'>{duration}</div>
                <div className='col-span-5 md:col-span-4'>
                    <p className='font2xl'>{degree}</p>
                    <p className='fontxl'>{place}</p>
                    <p className='fontmd'>{result}</p>
                </div>
            </div>
    )
}

export default EducationCardItem;
