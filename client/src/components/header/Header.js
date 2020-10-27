import React from 'react';
import Btn from '../btn';
import Title from '../title';

const Header = () => {
  return (
    <div className='header center-items'>
      <Title text='SquadLink' />

      <div className='header-btns center-items'>
        <Btn text='Sign Up!' />
        <Btn text='Login' />
      </div>
    </div>
  );
};

export default Header;
