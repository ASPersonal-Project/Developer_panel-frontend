import React from 'react';
import { Image,Card } from 'antd';

const ProfileCard = () => {
    return (
        <div>
            <Card>
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            <div className='text-5xl'>Anjana Shakthi</div> 
            <div className='text-3xl'>Associate Software Engineer</div>
            <div>about</div>
            <div>I'm a final year Software Engineering Undergraduate from the University of Kelaniya Sri Lanka.
Web and Mobile Developer JavaScript| TypeScript | React| NextJs |Redux | GraphQL | Nodejs (expressjs / NestJs) | React Native | MongoDB | HTML | CSS| MySQL</div>
            </Card>
        </div>
    )
}

export default ProfileCard
