import React from 'react'
import FeedBack from '../../../src/components/FeedBack/FeedBack'
import BasicInfoCard from '../../../src/components/profile/basicInfo/BasicInfoCard'
import ContactInfoCard from '../../../src/components/profile/contactInfo/ContactInfoCard'
import EducationCard from '../../../src/components/profile/education/EducationCard'
import ExperienceCard from '../../../src/components/profile/experience/ExperienceCard'
import LanguageCard from '../../../src/components/profile/language/LanguageCard'
import IntroCard from '../../../src/components/profile/intro/IntroCard'
import SkillCard from '../../../src/components/profile/skill/SkillCard'
import SocialMediaCard from '../../../src/components/profile/socialMedia/SocialMediaCard'
import MainLayout from '../../../src/layouts/MainLayout'

const Profile = () => {
    return (
        <MainLayout>
        <div className='grid grid-cols-5'>
            <div className='col-span-3'>
            <IntroCard/>
            <EducationCard/>
            <ExperienceCard/>
            <SocialMediaCard/>
            <FeedBack/>
            </div>
            <div className='col-span-2'>
                <BasicInfoCard/>
                <LanguageCard/>
                <SkillCard/>
            </div>
        </div>
        </MainLayout>
    )
}

export default Profile
