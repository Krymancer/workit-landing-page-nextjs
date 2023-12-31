import Image from 'next/image';

import Button from '@/components/Button';
import Enumerable from '@/components/Enumerable';
import Box from '@/components/Box';

import LogoWhite from '@/assets/images/logo-light.svg'
import Hero from '@/assets/images/image-hero.webp';
import Founder from '@/assets/images/image-founder.webp';
import LogoDark from '@/assets/images/logo-dark.svg';
import Facebook from '@/assets/images/icon-facebook.svg';
import Twitter from '@/assets/images/icon-twitter.svg';
import Instagram from '@/assets/images/icon-instagram.svg';

import BgPattern1 from '@/assets/images/bg-pattern-1.svg';
import BgPattern2 from '@/assets/images/bg-pattern-2.svg';

export default function Home() {
  const items = [
    {
      index: 1,
      title: 'Actionable insights',
      content: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
    },
    {
      index: 2,
      title: 'Data-driven decisions',
      content: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
    },
    {
      index: 3,
      title: 'Always affordable',
      content: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
    }
  ]

  return (
    <>
      <header className='bg-dark-purple'>
        <nav className='flex items-center justify-between px-4 md:px-10 lg:px-40 lg:pt-14 pt-8'>
          <div className="relative flex items-center h-[24px] w-[95px]">
            <Image src={LogoWhite} alt="Workit logo" fill />
          </div>
          <div>
            <Button label="Apply for access" secondary />
          </div>
        </nav>
        <h1 className="text-white text-[50px] lg:text-[80px] wonky font-fraunces leading-[50px] lg:leading-[80px]  w-full text-center font-semibold mt-16 md:mt-14 lg:mt-14">
          Data <span className="underline decoration-eucaplyptus">tailored</span> to <br />
          your needs.
        </h1>
        <div className="flex justify-center mt-10 md:mt-9 lg:mt-9">
          <Button label="Learn more" />
        </div>

        <div className='absolute bottom-[70%] right-[90%]'>
          <div className='relative hidden lg:block w-[270.29px] h-[215.10px]'>
            <Image src={BgPattern1} alt="" fill />
          </div>
        </div>

        <div className='absolute bottom-[65%] left-[93%]'>
          <div className='relative hidden lg:block w-[141.29px] h-[112.10px]'>
            <Image src={BgPattern2} alt="" fill />
          </div>
        </div>

        <div className='lg:h-[150px] md:h-[100px] h-[50px]'>
          <div className='absolute w-full flex justify-center py-[1rem]'>
            <div className='relative lg:w-[767px] lg:h-[441px] md:w-[514px] md:h-[296px] w-80 h-[184px]'>
              <Image src={Hero} alt="" fill />
            </div>
          </div>
        </div>

      </header>
      <div className="bg-ghost-white pb-6">
        <div className="bg-dark-purple rounded-b-[100%] h-[60px] lg:h-[120px]"></div>
      </div>

      <main className="">
        <div className="bg-ghost-white flex flex-col lg:flex-row lg:pt-[200px] md:pt-[100px] pt-[50px]">
          {items.map((item) => (<Enumerable key={item.index} {...item} />))}
        </div>
        <div className="bg-ghost-white rounded-b-[100%]  h-[120px]"></div>

        <div className="flex flex-col items-center px-4 md:flex-row justify-center pt-10 ">
          <div className="relative lg:w-[447px] lg:h-[447px] md:w-[281px] md:h-[281px] w-[281px] h-[281px] -z-10 md:-mt-40 lg:mt-5">
            <Image src={Founder} alt="" fill />
          </div>
          <div className='-mt-12 md:w-[32rem] md:-ml-28 md:pt-72 lg:w-[45rem] lg:-ml-20'>
            <Box />
          </div>
        </div>
      </main>

      <footer className='flex flex-col items-center gap-14 py-20'>
        <div className='relative h-[24px] w-[95px]'>
          <Image src={LogoDark} alt="Workit logo" fill />
        </div>
        <div className='flex justify-between gap-5'>
          <Image src={Facebook} alt="Facebook" width={20} height={20} />
          <Image src={Twitter} alt="Twitter" width={20} height={20} />
          <Image src={Instagram} alt="Instagram" width={20} height={20} />
        </div>
      </footer>
    </>
  )
}
