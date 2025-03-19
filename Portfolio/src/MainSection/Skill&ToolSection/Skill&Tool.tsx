import './../../css/Skill&Tools.css'
import idea_dark from './../../assets/Idea-Dark.png'
import java_dark from './../../assets/Java-Dark.png'
import javascript from './../../assets/JavaScript.png'
import mysql_dark from './../../assets/MySQL-Dark.png'
import php_dark from './../../assets/PHP-Dark.png'
import php_my_admin_logo from './../../assets/PhpMyAdmin_logo.png'
import pycharm_dark from './../../assets/PyCharm-Dark.png'
import python from './../../assets/Python-Dark.png'
import react_img from './../../assets/React-Dark.png'


function SkillAndTools(){
    return(
        <div className="flex justify-center bg-white font-[Inclusive_Sans] flex-wrap">
            <div className='flex'>
                <p>Skill&Tools</p>
                <div>
                    <img className='hexagon' src={idea_dark} alt="IDEA"/>
                    <img className='hexagon' src={java_dark} alt="programming language"/>
                    <img className='hexagon' src={javascript} alt="programming language"/>
                    <img className='hexagon' src={mysql_dark} alt="database" />
                    <img className='hexagon' src={php_dark} alt="programming language" />
                    <img className='hexagon' src={php_my_admin_logo} alt="database" />
                    <img className='hexagon' src={pycharm_dark} alt="IDEA" />
                    <img className='hexagon' src={python} alt="programming language" />
                    <img className='hexagon'  src={react_img} alt="framework" />
                </div>
            </div>
        </div>
    )
}

export default SkillAndTools