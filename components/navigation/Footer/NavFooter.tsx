import { socialMedia } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function NavFooter() {
  return (
    <div className='flex items-center md:gap-3 gap-6'>
      {socialMedia.map((profile) => (
        <Link
          className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 '
          key={profile.id}
          href={profile.link}
        >
          <Image src={profile.img} width={20} height={20} alt={profile.img} />
        </Link>
      ))}
    </div>
  );
}
