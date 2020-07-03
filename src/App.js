import React from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'
import SignUp from './signup/SignUp.js'
import 'bulma/css/bulma.css';
import Message from './message/Message.js'


const App = () => {
  return <div>
    <Navbar/> 
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <SignUp/>
    <Message isInfo title='Hello World'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
    </div>
};

export default App;
