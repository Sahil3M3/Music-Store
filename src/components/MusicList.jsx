import React from 'react';
import { Row } from 'react-bootstrap';
import MusicCard from './UI/MusicCard';

const MusicList = () => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <Row xs={10} className="mt-3">
      {productsArr.map((product, index) => (
        <MusicCard
          key={index}
          albumNumber={index + 1}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </Row>
  );
};

export default MusicList;
