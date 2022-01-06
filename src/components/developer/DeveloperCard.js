import React from 'react';
import {Card,Button} from 'antd';

const {Meta} = Card;

const DeveloperCard = () => {
    return (
        <div>
            <Card
                style={{ width: 250 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
            >
                <Meta
                title="Card title"
                description="This is the description"
                />
                <Button block shape="round" className='my-2'>View</Button>
            </Card>
        </div>
    )
}

export default DeveloperCard
