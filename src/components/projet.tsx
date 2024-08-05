import Tilt from 'react-parallax-tilt'
import { NeonGradientCard } from '../@/components/magicui/neon-gradient-card'
export function Projets() {
    return (
<div id="Sproj" className=" animate-[proj-show_1s] ">
    <h2 id="Tproj" className="p-3 my-5 font-extrabold flex justify-center">Mes projets</h2>
        <div id="card" className=" sm:block md:block xl:flex xl:justify-center">
            <div className='flex justify-center'>
            <Tilt>
            <NeonGradientCard className='m-5 transition duration-500 hover:scale-125 hover:opacity-100 hover:mx-10'>
                <a href="src\components\Chess\index.html" id="carte1" className=" no-underline font-[bold] text-[black] flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] bg-[url(./assets/chessImg.png)] opacity-[80%] w-[250px] h-[400px] transition-all duration-[0.8s] ease-[ease-out] m-2.5 rounded-[10px]  "></a>
                </NeonGradientCard>
            </Tilt>
            </div>
            <div className='flex justify-center'>
                <Tilt>
                    
                <NeonGradientCard className='m-5 transition duration-500 hover:scale-125 hover:opacity-100 hover:mx-10'>
                    <a href="src\components\Beps\mainPage.html" id="carte2" className="no-underline font-[bold] text-[black] flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] bg-[url(./assets/beps.png)] opacity-[80%] w-[250px] h-[400px] transition-all duration-[0.8s] ease-[ease-out] m-2.5 rounded-[10px] "></a>
                    </NeonGradientCard>
                </Tilt>
            </div>
                    
                     
        </div>
</div>
    )

}

