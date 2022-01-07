import React from 'react';
import {Timeline,Card} from 'antd';
import EducationCardItem from './EducationCardItem';


const EducationCard = () => {
    const aa = [1,2,3];
    return (
        <div className='m-3'>
        <Card>
        <div className='p-4'>
            <div className='text-2xl mb-3'>Education</div>
            <Timeline>
                {aa.map( (edu,index) => {
                    return(
                        <Timeline.Item key={index} color="green">
                            <EducationCardItem 
                                duration= "2021-2020"
                                degree="afsa"
                                place="afds"
                                result="sdfsfs"
                            />
                        </Timeline.Item>    
                    )
                })}
            </Timeline>,
        </div>
        </Card>
        </div>
    )
}

export default EducationCard;
