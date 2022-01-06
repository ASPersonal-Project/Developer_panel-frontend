import React from 'react';
import {Card} from 'antd';

const ContactInfoCard = () => {
    return (
        <div>
            <div>
        <Card>
            <div>Contact Info</div>
        <div className='grid grid-cols-3 text-xl'>
            <div>Email</div>
            <div className='col-span-2'>anjanashakthi95@gmail.com</div>
        </div>
        <div className='grid grid-cols-3 text-xl'>
            <div>Mobile</div>
            <div className='col-span-2'>0712575774</div> 
        </div>
        <div className='grid grid-cols-3 text-xl'>
            <div>Address</div>
            <div className='col-span-2'>66/A, Rubberhena, Puwakwatta, Kamburugamuwa</div> 
        </div>
        </Card>
        </div>
        </div>
    )
}

export default ContactInfoCard
