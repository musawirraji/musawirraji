import Clients from '@/components/Clients';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import NavBar from '@/components/navigation/NavBar';
import RecentProject from '@/components/RecentProject';

export default function Home() {
  return (
    <main className=' flex flex-col justify-center items-center overflow-hidden mx-auto  '>
      <div className='w-full max-w-7xl '>
        <NavBar />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
      </div>
    </main>
  );
}
