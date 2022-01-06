import React from 'react';
import {Card} from 'antd';

const BasicInfoCard = () => {
    return (
        <div>
        <Card>
        <div className='grid grid-cols-3 text-xl'>
            <div>Age</div>
            <div className='col-span-2'>24</div>
        </div>
        <div className='grid grid-cols-3 text-xl'>
            <div>City</div>
            <div className='col-span-2'>Matara</div> 
        </div>
        <div className='grid grid-cols-3 text-xl'>
            <div>Country</div>
            <div className='col-span-2'>Sri Lanka</div> 
        </div>
        </Card>
        </div>
    )
}

export default BasicInfoCard;