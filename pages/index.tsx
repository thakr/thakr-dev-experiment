import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Theme from '../components/Theme'
import { useState } from 'react'
import About from '../components/windows/About'
import Contact from '../components/windows/Contact'
import Portfolio from '../components/windows/Portfolio'
import { AnimatePresence } from 'framer-motion'
const Home: NextPage = () => {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showPortfolio, setShowPortfolio] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const [active, setActive] = useState<string>();
  const toggleWindow = (window: string) => {
    if (window === "about") {
      setShowAbout(!showAbout);
      setActive("about");
    } else if (window === "contact") {
      setShowContact(!showContact);
      setActive("contact");
    } else if (window === "portfolio") {
      setShowPortfolio(!showPortfolio);
      setActive("portfolio");
    }
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <div className="h-screen w-screen bg-gradient-to-t from-blue-500 to-blue-300 dark:from-[#0B1B43] dark:to-black flex justify-center items-center transition-colors">
        <Theme />
          <AnimatePresence>
            {showAbout && <About activate={() => setActive("about")} close={() => toggleWindow("about")} active={active}/>}
            </AnimatePresence>
            <AnimatePresence>
            {showPortfolio && <Portfolio activate={() => setActive("portfolio")}  close={() => toggleWindow("portfolio")} active={active}/>}
            </AnimatePresence>
            <AnimatePresence>
            {showContact && <Contact activate={() => setActive("contact")}  close={() => toggleWindow("contact")} active={active}/>}
          </AnimatePresence>
        <div className='flex items-startn flex-col font-semibold text-white opacity-60 pointer-events-none'>
          <h1 className='text-9xl py-5'>Shaan</h1>
          <h1 className='text-9xl py-5'>Thakker</h1>
          <h2 className='text-7xl py-5'>developer & composer</h2>
        </div>
        <Nav openWin={toggleWindow} />
      </div>
    </>
  )
}

export default Home
