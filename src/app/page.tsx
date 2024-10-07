"use client"
import Image from 'next/image';
import HomeImg from '../../public/home.png';
import ImgCarousel from './components/carousel/page';
import Feature from './components/feature/page';
import Footer from './components/footer/page';
 
 
export default function Home() {
 
  return (
    <div className="w-full max-w-full  ">
    <h1 className="text-center">Welcome to My Next.js App!</h1>

    <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}> {/* Aspect ratio of 16:9 */}
      <Image
        src={HomeImg}
        alt="Home Image"
        layout="fill" // Use layout fill for absolute positioning
        objectFit="cover" // Cover to maintain aspect ratio
      />
    </div>
    <div className='left-0 right-0'>
      <ImgCarousel/>
    </div>
    <div>
      <Feature></Feature>
    </div>
    <Footer></Footer>
  </div>

  );
}
