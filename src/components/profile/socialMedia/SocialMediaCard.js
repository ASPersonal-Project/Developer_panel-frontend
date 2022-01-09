import React,{useState} from 'react';
import { Card } from 'antd';
import { GithubFilled, LinkedinFilled, FacebookFilled, MediumSquareFilled, TwitterSquareFilled,EditFilled} from '@ant-design/icons';
import SocialMediaModal from './SocialMediaModal';

const SocialMediaCard = () => {

    const [visible,setVisible] = useState(false);

    const handleModalVisible = (modalVisible) => {
        setVisible(modalVisible)
    }
    return (
        <div className='m-3'>
        <Card>
        <div className='flex justify-end'><EditFilled onClick={() => handleModalVisible(true)} /></div>
        <div className='flex justify-around'>
            <div><GithubFilled /></div>
            <div><LinkedinFilled /></div>
            <div><FacebookFilled /></div>
            <div><MediumSquareFilled /></div>
            <div><TwitterSquareFilled /></div>
        </div>
        </Card>
        <SocialMediaModal
            visible={visible}
            handleModalVisible={handleModalVisible}
        />
        </div>
    )
}

export default SocialMediaCard;
