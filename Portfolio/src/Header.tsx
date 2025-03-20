import './css/Header.css'

function Header()
{
    return(
    <header className="xl:px-17 lg:px-15 md:justify-end md:px-10 header-design z-1">
        <nav>
            <ul className="2xl:text-3xl 2xl:space-x-10 xl:space-x-7 lg:space-x-6 ul-design">
                <li className='li-design'>About</li>
                <li className='li-design'>Skill&Tools</li>
                <li className='li-design'>Project</li>
                <li className='li-design'>Contact</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header