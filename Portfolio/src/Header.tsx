import './css/Header/extraSmallDevice.css'

function Header()
{
    return(
    <header className="xl:px-17 lg:px-15 md:justify-end md:px-10 header-design">
        <nav>
            <ul className="2xl:text-3xl 2xl:space-x-10 xl:space-x-7 lg:space-x-6 ul-design">
                <li>About</li>
                <li>Skill&Tools</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header