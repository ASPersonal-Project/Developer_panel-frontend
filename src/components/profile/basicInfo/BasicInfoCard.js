import React from 'react';
import {Card} from 'antd';
import {MailFilled,MobileFilled, EnvironmentFilled, EditFilled, HomeFilled} from '@ant-design/icons'

const BasicInfoCard = () => {
    return (
        <div>
            <div className='m-3'>
        <Card>
            <div className='flex justify-between'>
                <p className='text-2xl'>Basic Info</p>
                <div><EditFilled /></div>
            </div>
        <div className='grid grid-cols-3 text-lg my-3'>
            <div className='flex items-center'>
                <div className='flex mr-2'>
                    <MailFilled/>
                </div> 
            <div className='inline-block'>Email</div>
            </div>
            
            <div className='col-span-2'>anjanashakthi95@gmail.com</div>
        </div>
        <div className='grid grid-cols-3 text-lg my-3'>
            <div className='flex items-center'>
                <div className='flex mr-2'>
                    <MobileFilled/>
                </div> 
            <div className='inline-block'>Mobile</div>
            </div>
            <div className='col-span-2'>0712575774</div> 
        </div>
        <div className='grid grid-cols-3 text-lg my-3'>
            <div className='flex items-center'>
                <div className='flex mr-2'>
                <HomeFilled />
                </div> 
            <div className='inline-block'>City</div>
            </div>
            <div className='col-span-2'>Matara, Sri Lanka</div> 
        </div>
        <div className='grid grid-cols-3 text-lg my-3'>
            <div className='flex items-center'>
                <div className='flex mr-2'>
                    <EnvironmentFilled/>
                </div> 
            <div className='inline-block'>Address</div>
            </div>
            <div className='col-span-2'>From Kamburugamuwa, Sri Lanka</div> 
        </div>
        </Card>
        </div>
        </div>
    )
}

export default BasicInfoCard;
