import Image from 'next/image';
import React from 'react';

const ImageView = ({ width, height, src }) => {
  return <img alt="Picture of the author" width={width} height={height} src={src} />;
};

export default ImageView;
