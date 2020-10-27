import React from 'react';
import Card from '../../components/card';
//temp
import apex from '../../assets/images/apex.jpg';

const Home = () => {
  return (
    <div className='home center-items'>
      <Card coverImage={apex} />
    </div>
  );
};

export default Home;
