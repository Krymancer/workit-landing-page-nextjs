import Image from 'next/image';

import LogoWhite from '@/assets/images/logo-light.svg'
import LogoDark from '@/assets/images/logo-dark.svg'
import Button from '@/components/Button';


export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="relative">
            <Image src={LogoWhite} alt="Workit logo" fill/>
          </div>
          <div>
            <Button label="Apply for access" />
          </div>
        </nav>
      </header>
      <main className="">

      </main>
      <footer>

      </footer>
    </>
  )
}
