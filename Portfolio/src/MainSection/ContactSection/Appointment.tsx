import { useState } from 'react'

import './../../css/Contact.css'

function Appointment(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function display_date(){
        alert(`${name} ${email} ${phone} ${message}`)
    }
    return(
        <div className="appointment-container">
            <h2>MAKE APPOINTMENT</h2>

            <form className='w-[100%]'>
                <p>NAME</p>
                <input 
                    type="text" 
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>EMAIL</p>
                <input 
                    type="text" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>PHONE</p>
                <input 
                    type="text" 
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <p>MESSAGE</p>
                <textarea 
                    placeholder='Write message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="w-full flex justify-center mt-2">
                    <button className="bg-[#737070] py-1.5 px-2 rounded-2xl cursor-pointer" onClick={display_date}>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Appointment