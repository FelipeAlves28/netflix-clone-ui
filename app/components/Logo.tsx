import Image from 'next/image';
import React from 'react';

export const Logo = () => {
  return (
    <Image src='/images/image-netflix.png' width={90} height={90} alt='logo' />
  );
};
