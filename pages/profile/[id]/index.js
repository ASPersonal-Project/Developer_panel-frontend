import React from 'react'
import BasicInfoCard from '../../../src/components/profile/BasicInfoCard'
import ContactInfoCard from '../../../src/components/profile/ContactInfoCard'
import EducationCard from '../../../src/components/profile/education/EducationCard'
import ExperienceCard from '../../../src/components/profile/experience/ExperienceCard'
import LanguageCard from '../../../src/components/profile/LanguageCard'
import ProfileCard from '../../../src/components/profile/ProfileCard'
import SkillCard from '../../../src/components/profile/SkillCard'
import MainLayout from '../../../src/layouts/MainLayout'

const Profile = () => {
    return (
        <MainLayout>
        <div className='grid grid-cols-5'>
            <div className='col-span-3'>
            <ProfileCard/>
            <EducationCard/>
            <ExperienceCard/>
            </div>
            <div className='col-span-2'>
                <BasicInfoCard/>
                <ContactInfoCard/>
                <LanguageCard/>
                <SkillCard/>
            </div>
        </div>
        </MainLayout>
    )
}

export default Profile
