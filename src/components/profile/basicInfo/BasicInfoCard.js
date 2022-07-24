import React,{useState,useEffect} from 'react';
import {Card} from 'antd';
import BasicInfoModal from './BasicInfoModal';
import {MailFilled,MobileFilled, EnvironmentFilled, EditFilled, HomeFilled} from '@ant-design/icons'
import profileService from '../../../services/profileService';

const BasicInfoCard = () => {

    const [visible,setVisible] = useState(false);
    const [data,setData] = useState(null);

    useEffect(() => {
        fetchBasicInfo();
    }, [])

    const fetchBasicInfo = async () => {
        try {
            const data = await profileService.fetchUser();
            console.log('***********',data)
            setData(data.data);
        } catch (error) {
            console.log(error);
        }

    }

    const handleModalVisible = (modalVisible) => {
        setVisible(modalVisible)
    }
    return (
        <div>
            <div className='m-3'>
        <Card>
            <div className='flex justify-between'>
                <p className='text-2xl'>Basic Info</p>
                <div><EditFilled onClick={() => handleModalVisible(true)}/></div>
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
        <BasicInfoModal 
                visible={visible}
                handleModalVisible={handleModalVisible}
                data={data}
                refreshHandler={fetchBasicInfo}
            />
        </div>
        </div>
    )
}

export default BasicInfoCard;
