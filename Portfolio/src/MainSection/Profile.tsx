import '../css/Profile.css'
import profile_pic from '../assets/Profile.png'

function Profile(){
    return(
    <>
        <img className='rounded-full bg-white border-black border-2 w-32 h-32 object-cover' src={profile_pic} alt="profile_pic"/>
    </>
    )
}

export default Profile