import './App.css';
import BlurFade from '../src/@/components/magicui/blur-fade';
import { Footer } from './components/footer';
import { COMPETANCE } from './components/comp';
import { NAVBAR } from './components/navbar';
import { Projets } from './components/projet';
import { Parcours } from './components/parcours';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className='bg-[url("../src/assets/ciel.jpg")] bg-fixed bg-cover bg-[length:auto_1700px] bg-no-repeat'>
      <div className='bg-[url("../src/assets/ciel.jpg")] bg-fixed bg-cover bg-[length:auto_1700px] bg-no-repeat'>
        <BlurFade delay={0.5} inView>
          <NAVBAR />
        </BlurFade>

        <div id="page" className='min-h-full'>
          <BlurFade delay={0.8} inView>
            <Projets />
          </BlurFade>
        </div>

        <div className='lg:bg-[url("../src/assets/moi.png")] sm:bg-[url("../src/assets/ciel2.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full flex justify-center'>
          <BlurFade delay={0.5} inView className="w-full">
            <COMPETANCE />
          </BlurFade>
        </div>

        <div className='lg:bg-[url("../src/assets/moi.png")] sm:bg-[url("../src/assets/ciel1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full flex justify-center'>
          <BlurFade delay={0.5} inView className="w-full">
            <Parcours />
          </BlurFade>
        </div>

        <div className='bg-[url("../src/assets/ciel2.jpg")] bg-fixed bg-cover bg-no-repeat'>
          <div className='flex justify-center'>
            <BlurFade delay={0.5} inView>
              <Contact />
            </BlurFade>
          </div>
          <BlurFade delay={0.5} inView>
            <Footer />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export default App;
