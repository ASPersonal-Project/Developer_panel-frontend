import React, { useState,useEffect } from 'react';
import { Image,Card } from 'antd';
import { EditFilled } from '@ant-design/icons';
import IntroModal from './IntroModal';
import profileService from '../../../services/profileService';

const IntroCard = () => {
    const [visible,setVisible] = useState(false);
    const [data,setData] = useState(null)

    useEffect(() => {
        fetchIntro();
    }, [])

    const fetchIntro = async () => {
        try {
            const data = await profileService.fetchIntro();
            setData(data.data);
        } catch (error) {
            console.log(error);
        }

    }

    const handleModalVisible = (modalVisible) => {
        setVisible(modalVisible)
    }

    return (
        <div className='m-3'>
            <Card>
                <div className='flex justify-end'><EditFilled onClick={() => handleModalVisible(true)} /></div>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 my-3'>
                        <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                       
                    </div>
                    <div className='col-span-2 flex justify-center items-center text-center'>
                        <div>
                            <div className='text-5xl'>{data && data.full_name}</div> 
                            <div className='text-3xl'>{data && data.headline}</div>
                        </div>

                    </div>
                </div>
            <div>{data && data.description}</div>
            </Card>
            <IntroModal 
                visible={visible}
                handleModalVisible={handleModalVisible}
                data={data}
                fetchHandler={fetchIntro}
            />
        </div>
    )
}

export default IntroCard
