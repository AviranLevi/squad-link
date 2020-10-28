import React from 'react';
import Btn from '../btn';
import Title from '../title';

const Navbar = () => {
  return (
    <div className='navbar center-items'>
      <Title text='SquadLink' />

      <div className='navbar-btns center-items'>
        <Btn text='Sign Up!' />
        <Btn text='Login' />
      </div>
    </div>
  );
};

export default Navbar;
