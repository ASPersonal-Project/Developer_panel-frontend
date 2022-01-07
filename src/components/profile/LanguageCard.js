import React from 'react';
import {Card,Progress} from 'antd';

const LanguageCard = () => {
    return (
        <div className='m-3'>
            <Card>
                <div className='text-xl'>Lanugage</div>
                <div>
                    <div className='inline'><Progress percent={30} steps={10} />
                    <div className='inline'>Sinhalae</div></div>
                </div>
                <div>
                    <div className='inline'><Progress percent={30} steps={10} />
                    <div className='inline'>English</div></div>
                </div>
            </Card>
        </div>
    )
}

export default LanguageCard
