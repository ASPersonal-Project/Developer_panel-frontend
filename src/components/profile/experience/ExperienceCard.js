import { Timeline, Card } from 'antd'
import React,{useState} from 'react'
import ExperienceCardItem from './ExperienceCardItem';
import { PlusCircleFilled } from '@ant-design/icons';
import ExperienceModal from './ExperienceModal';

const ExperienceCard = ({company,place,jobs}) => {

    const [visible,setVisible] = useState(false);

    const handleModalVisible = (modalVisible) => {
        setVisible(modalVisible)
    }
    const aa = [1,2,3];
    return (
        <div className='m-3'>
        <Card>
        <div className='p-4'>
            <div className='flex justify-between'>
                <p className='text-2xl'>Experience</p>
                <div><PlusCircleFilled onClick={() => handleModalVisible(true)}/></div>
            </div>
            <Timeline>
                {aa.map((item,index) => {
                    return(
                        <Timeline.Item  color="green">
                            <ExperienceCardItem
                                duration="2021-2022"
                                position="aaa"
                                jobType="parttime"
                            />
                        </Timeline.Item>
                    )
                })}
            </Timeline>
        </div>
        </Card>
        <ExperienceModal
                    visible={visible}
                    handleModalVisible={handleModalVisible}
            />
        </div>
    )
}

export default ExperienceCard
