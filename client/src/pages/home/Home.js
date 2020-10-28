import React from 'react';
import Card from '../../components/card';
import Title from '../../components/title';
//temp
import apex from '../../assets/images/apex.jpg';
import Header from '../../components/header';

const Home = () => {
  return (
    <div className='home center-items'>
      <Header />

      <Title text='Games' className='home-title' />
      <div className='games-cards center-items'>
        <Card coverImage={apex} title='Apex Legends' />
      </div>
    </div>
  );
};

export default Home;
