"use client";
import React, { useState, useEffect } from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let image =
    "https://i1.sndcdn.com/artworks-u7Vi9LIFRXug35T3-vhXHzg-t500x500.jpg";

  // Use useEffect to check if the screen size is mobile and update the state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1033); // You can adjust this threshold as needed
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex-col flex md:flex-col m-8 sm:flex-col justify-center -ml-[1px] font-bold p-2 items-center mt-10">
        <div className="text-[#8c8d83] flex gap-4 font-mono text-[25px]">
          <FontAwesomeIcon icon={faCaretRight} className="mt-2" height={25} />
          @Rohitsingh<span className="blinking-cursor -m-2 -ml-5">|</span>
        </div>
        {isMobile && (
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="lg:hidden text-sm text-purple-400 font-semibold rounded-full "
          >
            ./Navbar
          </button>
        )}
      </div>

      {isMobile ? (
        <div
          className={`overflow-auto \
                      z-30 \
                      h-5/6 \
                      w-10/12 \
                      mx-auto \
                      top-1/2 \
                      left-1/2 \
                      transform -translate-x-1/2 -translate-y-1/2 \
                      p-6 \
                      border \
                      rounded-xl \
                      bg-[#151719] \
                      text-left \
                      fixed \
                      ${toggle ? "visible" : "invisible"}`}
        >
          <div className="grid text-[#8c8d83] gap-3 -m-2 justify-center text-left font-bold items-center sm:flex sm:flex-row sm:gap-5">
            <Image
              alt="welcome"
              className="mt-20 mb-5 rounded-lg"
              height={200}
              width={200}
              src={image}
            />
            <Link
              href="/"
              className="rounded-full"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./home
            </Link>
            <Link
              href="/about"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./about
            </Link>
            <Link
              href="/socials"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./socials
            </Link>
            <Link
              href="/projects"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./projects
            </Link>
            <Link
              href="/experience"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./experience
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid text-[#8c8d83] gap-3 -m-2 justify-center font-bold items-center sm:flex sm:flex-row sm:gap-5">
          <Link href="/">./home</Link>
          <Link href="/about">./about</Link>
          <Link href="/socials">./socials</Link>
          <Link href="/projects">./projects</Link>
          <Link href="/experience">./experience</Link>
        </div>
      )}
    </>
  );
};

export default Header;
