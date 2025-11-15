import React from 'react';
import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
            <a
                href="https://www.bbc.com/news"
                target="_blank"
                className="black_btn"
            >
                BBC News
            </a>
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br className="max-md:hidden" />
            <span 
                className="animate-text font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500"
            >
                OpenAI GPT-5
            </span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summize, an open-source article summarizer
            that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero