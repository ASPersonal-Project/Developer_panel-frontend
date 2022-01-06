import React from 'react'
import MainHeader from '../components/common/MainHeader';

const MainLayout = ({children}) => {
    return (
        <div>
            <MainHeader/>
            {children}
        </div>
    )
}

export default MainLayout;
