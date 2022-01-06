import React from 'react'
import BasicInfoCard from '../../../src/components/profile/BasicInfoCard'
import ContactInfoCard from '../../../src/components/profile/ContactInfoCard'
import EducationCard from '../../../src/components/profile/education/EducationCard'
import ExperienceCard from '../../../src/components/profile/experience/ExperienceCard'
import ProfileCard from '../../../src/components/profile/ProfileCard'
import MainLayout from '../../../src/layouts/MainLayout'

const Profile = () => {
    return (
        <MainLayout>
        <div className='grid grid-cols-3'>
            <div className='col-span-2'>
            <ProfileCard/>
            <EducationCard/>
            <ExperienceCard/>
            </div>
            <div>
                <BasicInfoCard/>
                <ContactInfoCard/>
            </div>
        </div>
        </MainLayout>
    )
}

export default Profile
