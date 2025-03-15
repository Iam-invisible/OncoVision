import Benefits from '@/components/Benefits';
import Billy from '@/components/Promise';
import FeaturesSection from '@/components/Feature';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
export default function App() {
  return (
    <div className="bg-[url('/div.svg')] opacity-100 ">
        <Navbar/>

      <MaxWidthWrapper>
      <div className="space-y-10">
          <header className="text-center mb-10">
            <div className=" opacity-100 inline-flex items-center justify-center px-4 py-2 rounded-full text-2zl font-semibold mb-4">
              <GraduationCap className='mr-2'/>
              <span>Empowering Precision in Cancer Detection</span>
              <GraduationCap className='ml-2'/>

            </div>
            <h1 className="text-xl  font-bold">
            Early diagnosis, predictive insights, &<br/>24/7 assistance for better patient outcomes.
            </h1>
          </header>

            </div>
          </section>

          <section className="text-center flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-gray-600 text-lg">100+ Doctors</span>
              <span className="text-gray-600">Already Joined</span>
            </div>
            <Image src='/arrow.png' alt='arrow' className="hidden md:block w-8 h-6 md:w-12 md:h-8" width={48} height={32} />

            <LoginButton  asChild>
            <Button variant="default" size="lg">
              Get Started 
            </Button>
          </LoginButton>
           
          </section>
         
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mt-28 '>
  

  <FeaturesSection />
</MaxWidthWrapper>
      <MaxWidthWrapper className='mt-28'>

          <Benefits />
      </MaxWidthWrapper>

 

          <MaxWidthWrapper className='mt-28'>

          <Billy />
      </MaxWidthWrapper>

    </div>
  );
}