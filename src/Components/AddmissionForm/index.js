import React, { useState } from 'react'
import PasswordField from '../PasswordField';

const AddmissionForm = () => {
    const [password, setPassword] = useState('');
    const submitHandeler = (event) => {
        event.preventDefault(); // stops the page from refresh
    }
    return (
        <div>
            <form className='register-form' onSubmit={submitHandeler}>
                <input className='form-control border border-rounded my-2' type='text' placeholder='First Name' />
                <input className='form-control border border-rounded my-2' type='text' placeholder='Last Name' />
                <input className='form-control border border-rounded my-2' type='email' placeholder='Email' />
                <PasswordField placeholder={'Password'} handlePasswordChange={setPassword} />

                <select className='w-100' style={{height: '32px'}}>
                    <option>
                        Courses
                    </option>
                    <option>
                        Web Design
                    </option>
                    <option>
                        Video Editing
                    </option>
                    <option>
                        UI/UX Design
                    </option>
                    <option>
                        App Design
                    </option>
                </select>
                <div>
                    <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Submit'} />
                </div>
            </form>
        </div>
    )
}

export default AddmissionForm