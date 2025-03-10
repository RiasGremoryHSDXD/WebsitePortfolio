import '../css/AboutSection.css'
import Profile from './Profile.tsx'
import CreateInfo from './CreatorInfo.tsx'

function AboutSection()
{
    return(
    <div className='lg:flex lg:justify-center lg:items-center lg:flex-row lg:justify-evenly space-y-10'>
        <Profile/>
        <CreateInfo/>
    </div>)
}

export default AboutSection