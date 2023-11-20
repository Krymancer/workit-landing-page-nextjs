import Image from 'next/image';

import Button from "./Button";

import BgPattern3 from '@/assets/images/bg-pattern-3.svg';

export default function Box() {
  return (
    <div className="bg-dark-purple text-white p-8 md:px-14 md:py-12 lg:p-16 flex flex-col gap-4 relative">
      <h1 className="font-fraunces wonky text-[2rem] font-semibold md:text-[3rem] lg:text-[3.5rem] text-center md:text-start">Be the first to test</h1>
      <p className="font-manrope text-center md:text-start">
      Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.
      </p>
      <div className="w-42 pt-2 lg:pt-4 flex justify-center md:justify-start">
      <Button label="Apply for access" />
      </div>

      <div className='absolute top-[75%] left-[70%]'>
          <div className='relative hidden lg:block w-[173px] h-[137px]'>
            <Image src={BgPattern3} alt="" fill />
          </div>
        </div>
        
    </div>
  );
}