import React,{useState} from 'react';
import {Card,Progress} from 'antd';
import { EditFilled } from '@ant-design/icons';
import LanguageModal from './LanguageModal';

const LanguageCard = () => {
    const [visible,setVisible] = useState(false);

    const handleModalVisible = (modalVisible) => {
        setVisible(modalVisible)
    }
    return (
        <div className='m-3'>
            <Card>
                <div className='flex justify-between'>
                    <p className='text-2xl'>Language</p>
                    <div><EditFilled onClick={() => handleModalVisible(true)}/></div>
                </div>
                <div>
                    <div className='inline'><Progress percent={30} steps={10} />
                    <div className='inline'>Sinhalae</div></div>
                </div>
                <div>
                    <div className='inline'><Progress percent={30} steps={10} />
                    <div className='inline'>English</div></div>
                </div>
            </Card>
            <LanguageModal 
                visible={visible}
                handleModalVisible={handleModalVisible}
            />
        </div>
    )
}

export default LanguageCard
