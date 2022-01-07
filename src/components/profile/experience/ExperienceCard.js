import { Timeline, Card } from 'antd'
import React from 'react'
import ExperienceCardItem from './ExperienceCardItem'

const ExperienceCard = ({company,place,jobs}) => {
    const aa = [1,2,3];
    return (
        <div className='m-3'>
        <Card>
        <div className='p-4'>
            <p className='text-2xl'>Experience</p>
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
        </div>
    )
}

export default ExperienceCard
