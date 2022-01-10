import React,{useState} from 'react';
import { Card } from 'antd';
import {PropertySafetyOutlined, EditFilled} from '@ant-design/icons';
import SkillModal from './SkillModal';

const SkillCard = () => {

    const [visible,setVisible] = useState(false);

    const handleModalVisible = (modalVisible) => {
        setVisible(modalVisible)
    }

    const aa = [1,2,3];
    return (
        <div className='m-3'>
            
            <Card>
                <div className='flex justify-end'><EditFilled onClick={() => handleModalVisible(true)} /></div>
                <div className='mb-5'>
                <p className='text-xl'>Technical Skill</p>
                <div className='grid grid-cols-2 text-lg'>
                    {aa.map( a => {
                    return (
                        
                            <div className='flex items-center'>
                                <div className='flex mr-2'>
                                    <PropertySafetyOutlined/>
                                </div> 
                            <div className='inline-block'>React</div>
                            </div>
                    )
                })}
                </div>
                </div>
                <div className='mb-5'>
            <p className='text-xl'>Interpersonal Skill</p>
            <div className='grid grid-cols-2 text-lg'>
                    {aa.map( a => {
                    return (
                        
                            <div className='flex items-center'>
                                <div className='flex mr-2'>
                                    <PropertySafetyOutlined/>
                                </div> 
                            <div className='inline-block'>Team Work</div>
                            </div>
                    )
                })}
                </div>
                </div>
        </Card>
        <SkillModal
                    visible={visible}
                    handleModalVisible={handleModalVisible}
            />
        </div>
    )
}

export default SkillCard
