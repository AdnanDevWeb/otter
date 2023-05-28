import { FC, useState } from 'react'

interface NavProps {
  
}

const Nav: FC<NavProps> = ({}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <nav>
        <div className={`bg-white w-screen overflow-hidden transition-all ${isOpen ? 'opacity-70' : 'opacity-0 -z-50'} h-screen absolute top-0 left-0 lg:hidden`}></div>
        <div className='max-w-[1400px] relative mx-auto flex items-center'>
            <div className='w-full lg:absolute z-10'>
                <a href="" className='w-full flex lg:justify-center items-center'><img className=' cursor-pointer w-[8rem]' src="/images/logo.svg" alt="" /></a>
            </div>
            <div id='nav-text-container' className={`absolute lg:static top-full p-10 bg-coral rounded-2xl w-full mt-12 overflow-hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} lg:translate-y-0 lg:opacity-100 lg:bg-transparent lg:flex justify-between lg:p-0 items-center lg:mt-0`}>
                <article className='flex flex-col lg:flex-row text-2xl lg:text-base lg:font-medium text-dark-teal gap-4'>
                    <a href="">Parents</a>
                    <a href="">Sitters</a>
                    <a href="">Trust & Safety</a>
                    <a href="">Blog</a>
                </article>
                <div className='lg:hidden w-full h-[1px] bg-dark-teal my-8'></div>
                <article className='flex gap-6'>
                    <button className="text-2xl lg:text-base lg:font-medium">Log in</button>
                    <button className="btn">Sign up</button>
                </article>
            </div>
            <div id='menuToggle' className='relative lg:hidden'>
                <input className='absolute translate-y-5 w-full scale-[3] z-50 opacity-0' onClick={() => { setIsOpen(!isOpen)}} type="checkbox" />
                <div className='relative'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav