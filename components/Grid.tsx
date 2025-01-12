import React from 'react';

import { gridItems } from '@/constants';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

const getGridClass = (id: number) => {
  switch (id) {
    case 1:
      return 'lg:col-span-2 lg:row-start-1';
    case 2:
      return 'lg:col-span-2 lg:row-start-1';
    case 3:
      return 'lg:col-span-2 lg:row-span-4 lg:row-start-1';
    case 4:
      return 'lg:col-span-4 lg:row-span-7 lg:row-start-2';
    case 5:
      return 'lg:col-span-2 lg:row-span-4 lg:row-start-5';
    default:
      return '';
  }
};

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className='w-full py-20'>
        {gridItems.map(({ id, title, description, img }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={getGridClass(id)}
            img={img}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
