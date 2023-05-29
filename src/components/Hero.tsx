import { FC } from 'react'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main className='mt-12'>
        <div className='max-w-[1400px] mx-auto bg-dark-teal rounded-3xl p-10 sm:px-16 sm:py-28 relative overflow-hidden'>
            <header className='text-white text-center space-y-5 relative z-10'>
                <h1 className='sm:text-[4rem]/[95%] text-[3.3rem]/[95%] font-semibold font-["Playfaire_Display"]'>Reliable Kidcare on demand</h1>
                <p className='font-medium'>Otter matches parents who need care with trusted sitters in their community, on-deamnd.</p>
                <button className="btn text-dark-teal">Sign up</button>
            </header>

            <div className='flex absolute w-full h-full top-0 left-0 justify-between'>
                <div className="hero-bg-columns">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="hero-bg-columns">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        {/* <svg width="505" height="497" viewBox="0 0 505 497" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448.5 119C451.333 90.1665 0.500153 -74.5002 0.500153 42.9998C0.500153 160.5 24.5002 443 24.5002 443C24.5002 443 324.5 562.5 448.5 443C572.5 323.5 448.5 119 448.5 119Z" fill="#D9D9D9" stroke="black"/>
</svg> */}

    </main>
  )
}
export default Hero
