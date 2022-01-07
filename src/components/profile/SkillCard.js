import React from 'react';
import { Card } from 'antd';
import {PropertySafetyOutlined} from '@ant-design/icons';

const SkillCard = () => {
    const aa = [1,2,3];
    return (
        <div className='m-3'>
            
            <Card>
            <div className='text-xl'>Skills</div>
             {aa.map( a => {
            return (
                <div className='grid grid-cols-2 text-lg'>
                    <div className='flex items-center'>
                        <div className='flex mr-2'>
                            <PropertySafetyOutlined/>
                        </div> 
                    <div className='inline-block'>React</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex mr-2'>
                            <PropertySafetyOutlined/>
                        </div> 
                    <div className='inline-block'>Node</div>
                    </div>
        </div>
            )
        })}
        </Card>

        </div>
    )
}

export default SkillCard
