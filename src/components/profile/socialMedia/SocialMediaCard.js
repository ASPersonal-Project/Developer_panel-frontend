import React from 'react';
import { Card } from 'antd';
import { GithubFilled, LinkedinFilled, FacebookFilled, MediumSquareFilled, TwitterSquareFilled} from '@ant-design/icons';

const SocialMediaCard = () => {
    return (
        <div className='m-3'>
        <Card>
        <div className='flex justify-around'>
            <div><GithubFilled /></div>
            <div><LinkedinFilled /></div>
            <div><FacebookFilled /></div>
            <div><MediumSquareFilled /></div>
            <div><TwitterSquareFilled /></div>
        </div>
        </Card>
        </div>
    )
}

export default SocialMediaCard;
