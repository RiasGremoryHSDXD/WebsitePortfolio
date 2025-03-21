import '../css/Main.css'
import AboutSection from './AboutSection/AboutSection.tsx'
import SkillAndToolsSection from './Skill&ToolSection/Skill&Tool.tsx'

function Main()
{
    return(
    <div className='2xl:px-30 p-10 w-full overflow-hidden bg-[#007EA7]'>
        <AboutSection/>
        <SkillAndToolsSection/>
    </div>
    )
}

export default Main