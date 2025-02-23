'use client';

import { projects } from '@/constants';
import { FaLocationArrow } from 'react-icons/fa6';
import { PinContainer } from './ui/3d-pin';

const RecentProjects = () => {
  return (
    <div className='py-10 sm:py-20' id='projects'>
      <h1 className='heading'>
        A small selection of <br />
        <span className='text-green-100'> recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-12 sm:gap-x-24 gap-y-4 sm:gap-y-8 xl:gap-y-40 mt-4 sm:mt-10'>
        {projects.map((item) => (
          <div
            className='sm:h-[41rem] h-[30rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                <div
                  className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                  style={{ backgroundColor: '#3a7a5d' }}
                ></div>
                <img
                  src={item.img}
                  alt='cover'
                  className='z-10 absolute bottom-0'
                />
              </div>

              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {item.title}
              </h1>

              <p
                className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                style={{
                  color: '#cfddbe',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt='icon5' className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-3' color='#cdf9ac' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
