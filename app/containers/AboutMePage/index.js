import React, { useState, useEffect } from 'react';

const AboutMePage = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [blurb, setBlurb] = useState('');

  const getData = async () => {
    const response = await fetch('/api/about');
    const { data } = await response.json();
    setName(data.name);
    setImg(data.img);
    setBlurb(data.blurb);
  };

  useEffect(() => {
    getData();
  });

  const imgStyle = {
    borderRadius: '50%',
    width: '25%',
  };

  return (
    <div>
      <h3>About me:</h3>
      <div>
        <p>{name}</p>
        <img src={img} alt="user avatar" style={imgStyle} />
        <p>{blurb}</p>
      </div>
    </div>
  );
};

export default AboutMePage;
