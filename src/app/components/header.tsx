import React from 'react'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';


const Header = () => {
  return (
    <>
    <div className="flex m-8 justify-center font-bold p-2 items-center mt-10">
        <div className="text-[#8c8d83] flex gap-4 font-mono text-[25px]">
        <FontAwesomeIcon icon={faCaretRight} className='mt-2' height={25}/>@Rohitsingh<span className="blinking-cursor -m-2 -ml-5">|</span>
        </div>
      </div>
      <div className='flex text-[#8c8d83] gap-4 -m-2 justify-center font-bold items-center'>
      <Link href="/">
            ./home
          </Link>
          <Link href="/about">
            ./about
          </Link>
          <Link href="/socials">
            ./socials
          </Link>
          <Link href="/projects">
            ./projects
          </Link>
          <Link href="/experience">
            ./experience
          </Link>
        </div>
        </>
  )
}

export default Header