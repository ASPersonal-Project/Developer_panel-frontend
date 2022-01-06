import { Timeline, Card } from 'antd'
import React from 'react'
import ExperienceCardItem from './ExperienceCardItem'

const ExperienceCard = ({company,place,jobs}) => {
    const aa = [1,2,3];
    return (
        <Card>
        <div className='p-5'>
            <p className='font3xl  mb-1'>aaaa</p>
            <p className='fontlg'>ddddddd</p>
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
    )
}

export default ExperienceCard
