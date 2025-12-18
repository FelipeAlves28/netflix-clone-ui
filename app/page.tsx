import Image from 'next/image';
import Navbar from './components/Navbar';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className='from-background relative h-screen overflow-hidden bg-linear-to-t lg:h-[140vh]'>
      <Navbar />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute top-0 left-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/images/banner.jpg'
              alt='The Witcher'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Witcher
          </h1>
          <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl'>
            Geralt of Rivia (Cavill and Hemsworth) is a witcher, a mutant with
            special powers who kills monsters for money.
          </p>
        </div>
        <div className='flex space-x-3'>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 font-semibold text-black transition hover:opacity-75 md:px-6 md:py-2.5'>
            <PlayIcon className='h-6' />
            Play
          </button>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-400 px-5 py-1.5 font-semibold text-white transition hover:opacity-75 md:px-6 md:py-2.5'>
            <InformationCircleIcon className='h-6' />
            More Info
          </button>
        </div>
      </main>
    </div>
  );
}
