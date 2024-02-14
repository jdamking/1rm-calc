import React from 'react'

export default function Layout(props) {
    const { children } = props;
    return (
        <div className='bg-gradient-to-r from-slate-800 to-slate-950 min-h-screen text-slate-50'>
            <header className='flex flex-col p-6 sm:p-5 from-slate-800 to-slate-950 '>
                <div className='items-center font-medium text-xs sm:text-sm max-w-[900px] mx-auto w-full'>
                    <h1 href={'/'} className='hidden sm:inline'>Adam King</h1>
                    <h1 href={'/'} className='sm:hidden'>AK</h1>
                </div>
            </header>
            <h1 className='flex flex-col gap-4 p-4 items-center justify-center max-w-[800px] pt-16 sm:pt-20 mx-auto text-4xl sm:text-5xl md:text-5xl font-semibold'>
                One Rep Max Calculator</h1>
            <p className='text-center text-sm p-4 '>
                This calculator will help you determine your one repition max</p>
            <main className='flex flex-col py-16 sm:py-20 gap-8 max-w-[600px] w-full mx-auto'>
                {children}
            </main>
            <footer className='bg-gradient-to-r from-slate-800 to-slate-950 text-slate-50 flex p-8 py-16 text-xs sm:text-sm border-t border-verydark dark:border-light duration-200 item-center justify-center flex-col gap-6 '>
                <div className='flex item-center justify-center gap-4 text-lg sm:text-xl'>
                    <a className='p-3 cursor-pointer hover:opacity-60 dark:text-dark duration-200' /*href={''}*/>
                        <i className="fa-solid fa-file"></i>
                    </a>
                    <a className='p-3 cursor-pointer hover:opacity-60 dark:text-dark duration-200' href={'https://www.linkedin.com/in/adamk-ing/'}>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a className='p-3 cursor-pointer hover:opacity-60 dark:text-dark duration-200' href={'https://github.com/jdamking/'}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a className='p-3 cursor-pointer hover:opacity-60 dark:text-dark duration-200' href={'mailto:aking.wrk@gmail.com'}>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div className='flex item-center justify-center dark:text-dark text-xs gap-2'>
                    <a>Built by Adam King </a>
                    <p>|</p>
                    <a>Designed by Jon Zargo</a>
                </div>
            </footer>
        </div>

    )
}
