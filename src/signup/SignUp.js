import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const SignUp = (props) => {
    return (
        <div>
            <Navbar/>
            <FormField type='text' name='name' placeholder='Insert your name' />
            <FormField type='email' name='email' placeholder='Insert your email' />
            <FormField type='password' name='password' placeholder='Insert your password' />
            <CoolButton className='button my-class is-primary' type='Submit'/>
        </div>
    );
};

export default SignUp;