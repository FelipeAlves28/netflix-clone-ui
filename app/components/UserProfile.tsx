import Image from 'next/image';
import React from 'react';

export const UserProfile = () => {
  return (
    <div className='flex items-center space-x-2 md:space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
      <Image
        src='/images/profile.jpg'
        width={25}
        height={25}
        alt='profile'
        className='cursor-pointer rounded'
      />
    </div>
  );
};
