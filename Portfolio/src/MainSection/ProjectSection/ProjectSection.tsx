import './../../css/ProjectSection.css'
import grammar_picker from './../../assets/Grammar-Picker.png'
import library_management_system from './../../assets/Library-Management-System.png'

function ProjectSection(){

    function project_card(image_source:any, alternative_name:string,language:string, description:string, link:string)
    {
        return(
            <div className="project-card-con">
                <div className="project-card-info">
                    <img src={image_source} alt={alternative_name}/>
                    <h3>Language: {language}</h3>
                    <p>{description}</p>
                    <div className='flex justify-center items-center'>
                        <a href={link}>
                            <button>Go to Repository</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div id='Project' className="flex justify-center items-center flex-col p-2 space-y-10 w-[100%]">
            <p className='lg:text-5xl md:text-4xl sm:text-3xl font-[Inclusive Sans] text-2xl'>Project</p>
            <div className='flex justify-center gap-5  flex-wrap'>

                {project_card(grammar_picker, 'Python Game', 'Python', `"Grammar Pick" is a two-player game for elementary students, where players answer grammar-related questions from four choices.`, 'https://github.com/RiasGremoryHSDXD/Grammar-Pick')}
                {project_card(library_management_system, 'Library Management System', 'Java & MySQL', `The Library Management System is a Java-based desktop application developed. It can be used in administrators and users to manage books, borrowing, and returning activities effectively.`, 'https://github.com/RiasGremoryHSDXD/LibraryManagementSystem')}

            </div>
        </div>
    )
}

export default ProjectSection