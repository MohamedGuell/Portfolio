import IconCloud from '../@/components/magicui/icon-cloud'


const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "docker",
    "git",
    "github",
  
    "visualstudiocode",
    "figma",
  ];



export function COMPETANCE() {
    return (
        
        <div className='max-w-fit  sm:block lg:flex  bg-transparent justify-start bg-[rgb(200,200,200)]   shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] animate-[book-show_1s] mt-[210px] rounded-[20px]
'>
           <div className="mx-5 block text-center box-border shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] animate-[proj-show_3s] p-[3vh] rounded-[15px]
max-w-[30rem] w-fit text-xl text-pretty tracking-tighter">
            <div>
                        <h2 className=' my-5 font-extrabold '> à propos de moi</h2>
                        <p className=' font-semibold '>Je suis passionné par le développement web et je suis toujours à la recherche de nouvelles technologies et de nouveaux défis. Ma curiosité constante me pousse à explorer de nouveaux horizons. J’ai appris au cours de mes expériences passées que la collaboration est la clé du succès.</p>
                        </div>
                    </div>
                <div className='text-center mw-w-[35rem]'>
                    <h1 className=" mt-12 font-extrabold  text-xl    ">
                        Mes compétences
                    </h1>
                    
                       
                        <div id="comp" className="lg:w-[25rem]  text-center box-border shadow-[rgba(25,22,73)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(25,22,73)_0px_-2px_6px_0px_inset] animate-[proj-show_3s] p-[3vh] rounded-[15px]
 opacity-75 bg-[rgb(200,200,200)] ">
                            
                            <IconCloud iconSlugs={slugs} />
                            
                            
                        </div >
                </div>
      </div>
    )
} 