import React from 'react';
import { Image,Card } from 'antd';
import { EditFilled } from '@ant-design/icons';

const ProfileCard = () => {
    return (
        <div className='m-3'>
            <Card>
                <div className='flex justify-end'><EditFilled /></div>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 my-3'>
                        <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                       
                    </div>
                    <div className='col-span-2 flex justify-center items-center text-center'>
                        <div>
                            <div className='text-5xl'>Anjana Shakthi</div> 
                            <div className='text-3xl'>Associate Software Engineer</div>
                        </div>

                    </div>
                </div>
            <div>I'm a final year Software Engineering Undergraduate from the University of Kelaniya Sri Lanka.
Web and Mobile Developer JavaScript| TypeScript | React| NextJs |Redux | GraphQL | Nodejs (expressjs / NestJs) | React Native | MongoDB | HTML | CSS| MySQL</div>
            </Card>
        </div>
    )
}

export default ProfileCard
