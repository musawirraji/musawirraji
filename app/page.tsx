import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import NavBar from '@/components/navigation/NavBar';

import Parralax from '@/components/parralax/Parralax';
import RecentProject from '@/components/RecentProject';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center overflow-hidden mx-auto'>
      <div className='w-full max-w-7xl'>
        <NavBar />
        <Hero />
        <Grid />
      </div>

      <div className='w-full'>
        <Parralax />
      </div>

      <div className='w-full max-w-7xl'>
        <RecentProject />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
