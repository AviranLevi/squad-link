import React, { useState } from 'react';
import Btn from '../../components/btn';
import Input from '../../components/input';
import Title from '../../components/title';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  console.log(state);
  return (
    <div className='login center-items fade-in'>
      <Btn text='X' className='login-close-btn' />

      <Title text='Login' className='login-title' />
      <Input name='email' value={state.email} placeHolder='Your Email...' onChange={onChange} />
      <Input
        type='password'
        name='password'
        value={state.password}
        placeHolder='Your Password...'
        onChange={onChange}
      />

      <Btn text='Submit' />
    </div>
  );
};

export default Login;
